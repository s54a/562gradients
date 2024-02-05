import arr from "./gradients";
const numberInput = document.getElementById("numberInput");
const prev = document.querySelector("#prev");
const next = document.querySelector("#next");
const body = document.body;
let number = 1;
body.className = `_${number}`;
numberInput.value = number;

function setValue() {
  let inputValue = parseFloat(numberInput.value);
  if (inputValue < 0 || inputValue > 562) {
    Toastify({
      text: "The number must be between 1 and 562",
    }).showToast();
    return;
  }
  number = inputValue;
  body.className = `_${number}`;
  numberInput.value = number;
}

const setInputValue = document.querySelector("#setValue");

setInputValue.addEventListener("click", setValue);

prev.addEventListener("click", () => {
  body.style.backgroundImage = "";
  number--;
  if (number === 0) {
    number = 562;
  }
  body.className = `_${number}`;
  numberInput.value = number;
});

next.addEventListener("click", () => {
  body.style.backgroundImage = "";
  number++;
  if (number === 563) {
    number = 1;
  }
  body.className = `_${number}`;
  numberInput.value = number;
});

const randomGradient = document.querySelector("#randomGradient");

function generateRandomHexCode() {
  // Function to generate a random hexadecimal color code
  const randomHex = Math.floor(Math.random() * 16777215).toString(16);
  return "#" + randomHex.padStart(6, "0"); // Pad with zeros if necessary
}

function generateTwoDifferentRandomHexCodes() {
  let hexCode1 = generateRandomHexCode();
  let hexCode2 = generateRandomHexCode();

  // Ensure the two generated codes are different
  while (hexCode1 === hexCode2) {
    hexCode2 = generateRandomHexCode();
  }

  return [hexCode1, hexCode2];
}

randomGradient.addEventListener("click", () => {
  const [color1, color2] = generateTwoDifferentRandomHexCodes();
  body.style.backgroundImage = `linear-gradient(to right, ${color1}, ${color2})`;
  console.log("Random Graient Colors", color1, color2);
});

function copyColorObject() {
  const colorObject = arr[number];
  const jsonString = JSON.stringify(colorObject);
  navigator.clipboard
    .writeText(jsonString)
    .then(() => {
      console.log("Colors Copied to Clipboard:", jsonString);
      Toastify({
        text: "Gradient Colors Copied to Clipboard",
      }).showToast();
      return;
    })
    .catch((err) => {
      console.error("Unable to Copy Colors to Clipboard", err);
      Toastify({
        text: "Unable to Copy Colors to Clipboard",
      }).showToast();
    });
}

const copyGradientBtn = document.querySelector("#copyGradientBtn");
copyGradientBtn.addEventListener("click", copyColorObject);

const openModalButtons = document.querySelectorAll("[data-modal-target]");
const closeModalButtons = document.querySelectorAll("[data-close-button]");
const overlay = document.getElementById("overlay");

openModalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = document.querySelector(button.dataset.modalTarget);
    openModal(modal);
  });
});

overlay.addEventListener("click", () => {
  const modals = document.querySelectorAll(".modal.active");
  modals.forEach((modal) => {
    closeModal(modal);
  });
});

closeModalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = button.closest(".modal");
    closeModal(modal);
  });
});

function openModal(modal) {
  if (modal == null) return;
  modal.classList.add("active");
  overlay.classList.add("active");
}

function closeModal(modal) {
  if (modal == null) return;
  modal.classList.remove("active");
  overlay.classList.remove("active");
}
