## 🚗 Vehicle Image Classification using CNN

This project implements an image classification model to recognize different types of vehicles using a Convolutional Neural Network (CNN). <br>

The model is trained on a dataset of vehicle images and is capable of classifying several vehicle categories such as cars, bikes, trains, and more.

---

## 📌 Project Overview

The objective of this project is to build a deep learning model for vehicle image classification using TensorFlow/Keras. <br>

Unlike many projects that use pretrained architectures (ResNet, MobileNet, etc.), this project builds a custom CNN architecture from scratch, allowing full control over the model structure and training process. <br>

The workflow includes:

- Dataset exploration

- Data preprocessing

- Image augmentation

- CNN model development

- Model training and evaluation

- Model export to multiple deployment formats

- Inference 

---

## 🚘 Vehicle Categories

The model classifies images into the following categories: <br>

1. Auto Rickshaws

2. Bikes

3. Cars

4. Motorcycles

5. Planes

6. Ships

7. Trains

--- 


## 📊 Dataset Information

- Total Images (Base): 5590

- Image Resolution: Various sizes

- Class Distribution Base: Relatively balanced (~800 images per class)

Note: Because image resolutions vary, preprocessing and augmentation are applied before training. <br>

- Total Images (After Augmentation) : 11190

- Class Distribution Augmented: Relatively balanced (~1600 images per class)

--- 

## 🔄 Data Augmentation

To improve model generalization and increase dataset diversity, several augmentation techniques are applied: <br>

- Rotate Counterclockwise

- Rotate Clockwise

- Vertical Flip (Up-Down)

- Blur Transformation

These augmentations help the model learn robust visual patterns and reduce overfitting.

---


## 🧠 Model Architecture

This project uses a Pre-Trained Model MobileNetV2 + custom Convolutional Neural Network (CNN) architecture. <br>

Typical layers used include: <br>

- Convolutional Layers

- Max Pooling Layers

- GlobalAveragePooling2D

- Dropout Layers

- Fully Connected (Dense) Layers

- Softmax Output Layer

The model learns spatial features from vehicle images to classify them into their respective categories.

---


## 💾 Model Export

After training, the model is saved in three different formats for flexibility and deployment purposes: <br>

- TensorFlow SavedModel

- TensorFlow Lite (TFLite) – suitable for mobile deployment

- TensorFlow.js (TFJS) – for web-based applications

This allows the model to be integrated into multiple platforms such as: <br>

- Web applications

- Mobile apps

- Edge devices

---

## 🛠️ Technologies Used

This project utilizes several libraries for data preparation, image processing, model training, and deployment.

#### 📊 Data Preparation & Analysis

- Pandas – data manipulation and tabular processing

- NumPy – numerical computing and array operations

- Matplotlib – data visualization

- Seaborn – statistical data visualization

#### 🖼️ Image Processing & Augmentation

- OpenCV (cv2) – image loading and preprocessing

- Pillow (PIL) – image handling and manipulation

- Scikit-image – image transformations and augmentation

- Resize, Rotation

- Affine transformations


#### 🤖 Machine Learning & Deep Learning

- Scikit-learn

    - Train-test split

- TensorFlow / Keras

    - CNN model development

    - MobileNetV2 architecture

    - Model training and evaluation

#### 🌐 Model Deployment
- Saved Model

- TensorFlow Lite (TFLite) – deployment for mobile/edge devices

- TensorFlow.js – deployment for web applications

#### ⚙️ Utilities

- tqdm – progress bar for notebook execution

- joblib – model/data serialization

- OS & shutil – file and directory management

- warnings – suppress unnecessary warnings

--- 

### 📊 Result 

#### Base Model 
- Accuracy Train : 99,27%
- Accuracy Val : 95,17%
- Loss Train : 2,4%
- Loss Val : 27%

#### Fine Tuned Model
- Accuracy Train : 98,33%
- Accuracy Val : 95,11%
- Loss Train : 5,2%
- Loss Val : 19,5%

### Test Evaluate Model
- Test Loss: 0.0774
- Test Accuracy: 0.9786

--- 
