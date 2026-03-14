const imageInput = document.getElementById("imageInput");
const previewImage = document.getElementById("previewImage");
const uploadText = document.getElementById("uploadText");
const predictBtn = document.getElementById("predictBtn");
const deleteBtn = document.getElementById("deleteBtn");
const predictionText = document.getElementById("predictionText");
const confidenceText = document.getElementById("confidenceText");
const loading = document.getElementById("loading");
const errorMessage = document.getElementById("errorMessage");
const uploadBox = document.getElementById("uploadBox");

// ==========================
// Preview image after select
// ==========================
imageInput.addEventListener("change", () => {
  const file = imageInput.files[0];

  if (file) {
    showPreview(file);
  }
});

// ==========================
// Drag & Drop
// ==========================
uploadBox.addEventListener("dragover", (e) => {
  e.preventDefault();
  uploadBox.style.borderColor = "#ffffff";
});

uploadBox.addEventListener("dragleave", () => {
  uploadBox.style.borderColor = "#555555";
});

uploadBox.addEventListener("drop", (e) => {
  e.preventDefault();
  uploadBox.style.borderColor = "#555555";

  const file = e.dataTransfer.files[0];
  if (file && file.type.startsWith("image/")) {
    const dataTransfer = new DataTransfer();
    dataTransfer.items.add(file);
    imageInput.files = dataTransfer.files;

    showPreview(file);
  }
});

// ==========================
// Predict button
// ==========================
predictBtn.addEventListener("click", async () => {
  const file = imageInput.files[0];

  if (!file) {
    showError("Please upload an image first.");
    return;
  }

  const formData = new FormData();
  formData.append("image", file);

  loading.classList.remove("hidden");
  errorMessage.classList.add("hidden");
  predictionText.textContent = "-";
  confidenceText.textContent = "-";

  try {
    const response = await fetch("/predict", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    loading.classList.add("hidden");

    if (!response.ok) {
      showError(data.error || "Prediction failed.");
      return;
    }

    predictionText.textContent = data.prediction;
    confidenceText.textContent = `${data.confidence}%`;

    // Show delete button after successful prediction
    deleteBtn.classList.remove("hidden");

  } catch (error) {
    loading.classList.add("hidden");
    showError("Server error. Please try again.");
    console.error(error);
  }
});

// ==========================
// Delete / Reset button
// ==========================
deleteBtn.addEventListener("click", resetUI);

// ==========================
// Helper: show preview
// ==========================
function showPreview(file) {
  const reader = new FileReader();
  reader.onload = (e) => {
    previewImage.src = e.target.result;
    previewImage.classList.remove("hidden");
    uploadText.classList.add("hidden");
    errorMessage.classList.add("hidden");

    // Reset prediction when new image selected
    predictionText.textContent = "-";
    confidenceText.textContent = "-";

    // Show delete button because image exists
    deleteBtn.classList.remove("hidden");
  };
  reader.readAsDataURL(file);
}

// ==========================
// Helper: reset UI
// ==========================
function resetUI() {
  // Reset file input
  imageInput.value = "";

  // Hide preview
  previewImage.src = "";
  previewImage.classList.add("hidden");

  // Show upload instruction again
  uploadText.textContent = "Click or drag an image here to upload a new one";
  uploadText.classList.remove("hidden");

  // Reset result
  predictionText.textContent = "-";
  confidenceText.textContent = "-";

  // Hide delete button
  deleteBtn.classList.add("hidden");

  // Hide error & loading
  errorMessage.classList.add("hidden");
  loading.classList.add("hidden");
}

// ==========================
// Helper: show error
// ==========================
function showError(message) {
  errorMessage.textContent = message;
  errorMessage.classList.remove("hidden");
}