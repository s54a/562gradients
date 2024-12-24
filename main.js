import html2canvas from "html2canvas";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";
import arr from "./gradients";
const numberInput = document.getElementById("numberInput");
const prev = document.querySelector("#prev");
const next = document.querySelector("#next");
const body = document.body;
let number = 1;
body.className = `_${number}`;
numberInput.value = number;

function setValue() {
  if (rand) {
    return;
  } else {
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
    body.style.backgroundImage = "";
  }
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
  rand = false;
  inputValueChange();
});

next.addEventListener("click", () => {
  body.style.backgroundImage = "";
  number++;
  if (number === 563) {
    number = 1;
  }
  body.className = `_${number}`;
  numberInput.value = number;
  rand = false;
  inputValueChange();
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

let style, css, rand;

function inputValueChange() {
  if (rand) {
    numberInput.type = "text";
    numberInput.value = "Random";
  } else {
    numberInput.type = "number";
    numberInput.value = number;
  }
}

randomGradient.addEventListener("click", () => {
  const [color1, color2] = generateTwoDifferentRandomHexCodes();
  body.style.backgroundImage = `linear-gradient(to right, ${color1}, ${color2})`;
  css = `linear-gradient(to right, ${color1}, ${color2})`;
  style = `background-image: linear-gradient(to right, ${color1}, ${color2});`;
  console.log("Random Graient Colors", color1, color2);
  rand = true;
  inputValueChange();
});

function copyColorObject() {
  if (!rand) {
    const numberForArr = number - 1;
    const colorObject = arr[numberForArr];
    const jsonString = JSON.stringify(colorObject);
    console.log(jsonString);
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
  } else {
    console.log(style);
    navigator.clipboard
      .writeText(style)
      .then(() => {
        console.log("Colors Copied to Clipboard:", style);
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
}

const copyGradientBtn = document.querySelector("#copyGradientBtn");
copyGradientBtn.addEventListener("click", copyColorObject);

const form = document.querySelector("#form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  numberInput.blur();
});

const downloadBtn = document.querySelector("#downloadBtn");
const btn = document.querySelector(".btn");
const downloadBtnHeight = btn.offsetHeight;
const downloadBtnWidth = btn.offsetWidth;
numberInput.style.height = downloadBtnHeight + "px";
numberInput.style.width = downloadBtnWidth + "px";

downloadBtn.addEventListener("click", downloadImg);

function downloadImg() {
  const div = document.createElement("div");
  const numberForArr = number - 1;
  const colorObject = arr[numberForArr];
  let cssString = colorObject;
  let newCssString;

  if (!rand) {
    console.log(rand);
    newCssString = cssString.replace(/background-image: |;$/g, "");
    console.log(`Downloading the ${newCssString}`);
  } else {
    console.log(rand);
    newCssString = css;
    console.log(`Downloading the ${newCssString}`);
  }

  div.id = "gradientDiv";
  div.style.backgroundImage = newCssString;
  div.style.width = "1920px";
  div.style.height = "1080px";
  body.appendChild(div);

  html2canvas(document.querySelector("#gradientDiv"), {
    scale: 4,
  }).then((canvas) => {
    document.body.appendChild(canvas);
    const url = canvas.toDataURL("image/png");
    const a = document.createElement("a");
    a.download = "gradient";
    a.href = url;
    a.click();
    canvas.style.display = "none";
    body.removeChild(canvas);
    body.removeChild(div);
  });
}

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
