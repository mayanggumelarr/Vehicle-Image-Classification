# 🚗 Vehicle Image Classification using CNN

This project implements an image classification model to recognize different types of vehicles using a **Convolutional Neural Network (CNN)** combined with **MobileNetV2**.  

The model is trained on a dataset of vehicle images and is capable of classifying several vehicle categories such as **auto rickshaws, bikes, cars, motorcycles, planes, ships, and trains**.

In addition to model development, this repository also includes a **local inference dashboard** built with **Flask + TensorFlow Lite (TFLite)** for running predictions directly in the browser.

---

## 📌 Project Overview

The objective of this project is to build a deep learning model for **vehicle image classification** using **TensorFlow/Keras**.

This project combines:
- **Custom CNN architecture**
- **Pre-trained MobileNetV2**
- **TFLite export for lightweight inference**
- **Local Flask dashboard deployment**

### Workflow includes:
- Dataset exploration
- Data preprocessing
- Image augmentation
- CNN model development
- Model training and evaluation
- Model export to multiple deployment formats
- Local inference using Flask + TFLite

---

## 🚘 Vehicle Categories

The model classifies images into the following categories:

1. Auto Rickshaws  
2. Bikes  
3. Cars  
4. Motorcycles  
5. Planes  
6. Ships  
7. Trains  

### 📂 Dataset Source
You can access the dataset source here:  
[Kaggle Link](https://share.google/sP5KhBzbSFhRHXZzG)

---

## 📊 Dataset Information

- **Total Images (Base):** 5,590
- **Image Resolution:** Various sizes
- **Class Distribution (Base):** Relatively balanced (~800 images per class)

> **Note:** Because image resolutions vary, preprocessing and augmentation are applied before training.

- **Total Images (After Augmentation):** 11,190
- **Class Distribution (Augmented):** Relatively balanced (~1,600 images per class)

---

## 🔄 Data Augmentation

To improve model generalization and increase dataset diversity, several augmentation techniques are applied:

- Rotate Counterclockwise
- Rotate Clockwise
- Vertical Flip (Up-Down)
- Blur Transformation

These augmentations help the model learn more robust visual patterns and reduce overfitting.

---

## 🧠 Model Architecture

This project uses a **Pre-trained MobileNetV2** combined with a **custom Convolutional Neural Network (CNN)** architecture.

### Typical layers used include:
- Convolutional Layers
- Max Pooling Layers
- GlobalAveragePooling2D
- Dropout Layers
- Fully Connected (Dense) Layers
- Softmax Output Layer

The model learns spatial features from vehicle images to classify them into their respective categories.

---

## 💾 Model Export

After training, the model is exported in three different formats for flexibility and deployment purposes:

- **TensorFlow SavedModel**
- **TensorFlow Lite (TFLite)** – suitable for mobile and edge deployment
- **TensorFlow.js (TFJS)** – suitable for web-based applications

This allows the model to be integrated into multiple platforms such as:

- Web applications
- Mobile apps
- Edge devices

---

## 🛠️ Technologies Used

This project utilizes several libraries for data preparation, image processing, model training, and deployment.

### 📊 Data Preparation & Analysis
- **Pandas** – data manipulation and tabular processing
- **NumPy** – numerical computing and array operations
- **Matplotlib** – data visualization
- **Seaborn** – statistical data visualization

### 🖼️ Image Processing & Augmentation
- **OpenCV (cv2)** – image loading and preprocessing
- **Pillow (PIL)** – image handling and manipulation
- **Scikit-image** – image transformations and augmentation
- Resize, rotation, and affine transformations

### 🤖 Machine Learning & Deep Learning
- **Scikit-learn**
  - Train-test split
- **TensorFlow / Keras**
  - CNN model development
  - MobileNetV2 architecture
  - Model training and evaluation

### 🌐 Model Deployment
- **TensorFlow SavedModel**
- **TensorFlow Lite (TFLite)** – deployment for mobile/edge devices
- **TensorFlow.js (TFJS)** – deployment for web applications
- **Flask** – backend for local dashboard inference

### ⚙️ Utilities
- **tqdm** – progress bar for notebook execution
- **joblib** – model/data serialization
- **os & shutil** – file and directory management
- **warnings** – suppress unnecessary warnings

---

## 📊 Results

### Base Model
- **Train Accuracy:** 99.27%
- **Validation Accuracy:** 95.17%
- **Train Loss:** 2.4%
- **Validation Loss:** 27.0%

### Fine-Tuned Model
- **Train Accuracy:** 98.33%
- **Validation Accuracy:** 95.11%
- **Train Loss:** 5.2%
- **Validation Loss:** 19.5%

### Test Evaluation
- **Test Loss:** 7.7%
- **Test Accuracy:** 97.0%

---

## 🖥️ Local Dashboard Inference (Flask + TFLite)

In addition to model training and export, this project also includes a **simple local dashboard** for running inference using the exported **TensorFlow Lite (`.tflite`) model**.

The dashboard is built with:

- **Flask** as the backend
- **HTML, CSS, JavaScript** as the frontend
- **TensorFlow Lite Interpreter** for prediction
- **Monochrome UI design** for a clean and minimal appearance

This dashboard allows users to upload a vehicle image and get a prediction result directly in the browser.

---

## ✨ Dashboard Features

- Upload a vehicle image for prediction
- Drag & drop image support
- Real-time image preview before prediction
- Predict vehicle class using the exported **TFLite model**
- Display predicted class and confidence score
- Delete/reset image after prediction
- Responsive and minimal **monochrome-themed interface**
- Runs fully in a local environment

---

## 📁 Project Structure

```bash
vehicle-image-classification/
├── dashboard/
│   ├── app.py
│   ├── static/
│   │   ├── script.js
│   │   └── style.css
│   ├── templates/
│   │   └── index.html
│   └── tflite/
│       └── model.tflite
├── notebook_cnn.ipynb
├── saved_model/
├── tfjs_model/
├── tflite_model/
├── requirements.txt
└── README.md
