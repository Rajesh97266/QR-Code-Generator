let imgBox = document.getElementById("imgBox");
let qrImage = document.getElementById("qrImage");
let qrText = document.getElementById("qrText");
let spinner = document.getElementById("spinner");

let isFirstLoad = true; // Flag to track first load

function generateQR() {
  if (qrText.value.length > 0) {
    if (isFirstLoad) {
      spinner.style.display = "block"; // Show spinner only on first load
      qrImage.style.display = "none";
    }

    qrImage.src =
      "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
      qrText.value;

    qrImage.onload = () => {
      if (isFirstLoad) {
        spinner.style.display = "none"; // Hide spinner after first load
        isFirstLoad = false; // Set flag to prevent spinner from showing again
      }
      qrImage.style.display = "block";
      imgBox.classList.add("show-img");
    };
  } else {
    qrText.classList.add("error");
    setTimeout(() => {
      qrText.classList.remove("error");
    }, 1000);
  }
}
