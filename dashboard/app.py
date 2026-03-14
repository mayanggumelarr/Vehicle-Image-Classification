from flask import Flask, render_template, request, jsonify
import numpy as np
from PIL import Image
import tensorflow as tf
import os

BASE_DIR = os.path.dirname(os.path.abspath(__file__))

app = Flask(
    __name__,
    template_folder=os.path.join(BASE_DIR, "templates"),
    static_folder=os.path.join(BASE_DIR, "static")
)

# =========================
# Load TFLite Model
# =========================
MODEL_PATH = os.path.join(BASE_DIR, "tflite", "model.tflite")

interpreter = tf.lite.Interpreter(model_path=MODEL_PATH)
interpreter.allocate_tensors()

input_details = interpreter.get_input_details()
output_details = interpreter.get_output_details()

print("Input details:", input_details)
print("Output details:", output_details)

input_shape = input_details[0]['shape']
_, IMG_HEIGHT, IMG_WIDTH, IMG_CHANNELS = input_shape

# =========================
# EDIT SESUAI LABEL MODEL KAMU
# =========================
CLASS_NAMES = ["Bus", "Car", "Motorcycle", "Truck"]

# =========================
# Preprocess Image
# =========================
def preprocess_image(image):
    image = image.convert("RGB")
    image = image.resize((IMG_WIDTH, IMG_HEIGHT))
    img_array = np.array(image).astype(np.float32)

    # Scale
    img_array = img_array / 255.0

    img_array = np.expand_dims(img_array, axis=0)
    return img_array

# =========================
# Predict Function
# =========================
def predict_tflite(image):
    processed_image = preprocess_image(image)

    interpreter.set_tensor(input_details[0]['index'], processed_image)
    interpreter.invoke()
    output_data = interpreter.get_tensor(output_details[0]['index'])

    predicted_index = int(np.argmax(output_data[0]))
    confidence = float(np.max(output_data[0]))

    predicted_class = (
        CLASS_NAMES[predicted_index]
        if predicted_index < len(CLASS_NAMES)
        else f"Class {predicted_index}"
    )

    return predicted_class, confidence

# =========================
# Routes
# =========================
@app.route("/")
def home():
    return render_template("index.html")

@app.route("/predict", methods=["POST"])
def predict():
    if "image" not in request.files:
        return jsonify({"error": "No image file uploaded"}), 400

    file = request.files["image"]

    if file.filename == "":
        return jsonify({"error": "No selected file"}), 400

    try:
        image = Image.open(file.stream)
        prediction, confidence = predict_tflite(image)

        return jsonify({
            "prediction": prediction,
            "confidence": round(confidence * 100, 2)
        })

    except Exception as e:
        return jsonify({"error": str(e)}), 500

# Health check optional
@app.route("/health")
def health():
    return "OK", 200

# =========================
# Run Local
# =========================
if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port, debug=True)