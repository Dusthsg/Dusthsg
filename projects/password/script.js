const display = document.querySelector("#password");

const letters = document.querySelector("#letters");
const numbers = document.querySelector("#numbers");
const symbols = document.querySelector("#symbols");

const lengthBox = document.querySelector("#length");

const level = document.querySelector(".indicator");
const desc = document.querySelector("#description");

const generate = document.querySelector("#generate");
const copy = document.querySelector("#copy");

const lettersBox = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbersBox = "1234567890";
const symbolsBox = "!@#$%><:;()*&";

const drag = document.querySelector("#drag");
const win = document.querySelector(".dev-tool");

let chars = "";
let pass = "";
let score = 0;

let x = 0
let y = 0
let winX = 0
let winY = 0
chars += lettersBox;
chars += numbersBox;
chars += symbolsBox;

letters.checked = true;
numbers.checked = true;
symbols.checked = true;

console.log(chars);

generate.addEventListener("click", genPass);
copy.addEventListener("click", copyPassword);
drag.addEventListener("mousedown", initDrag);

function selectChars() {
  chars = "";

  if (letters.checked) {
    chars += lettersBox;
  }

  if (numbers.checked) {
    chars += numbersBox;
  }

  if (symbols.checked) {
    chars += symbolsBox;
  }
}

function genPass() {
  selectChars();

  if (chars === "") {
    alert("Selecione pelo menos um tipo de caractere.");
    return;
  }

  pass = "";

  let length = Number(lengthBox.value);

  for (let i = length; i > 0; i--) {
    const index = Math.floor(Math.random() * chars.length);
    const character = chars[index];

    pass += character;
  }

  display.value = pass;

  console.log(pass);
  const score = valid();
  drawWrite(score);
}

function copyPassword() {
  navigator.clipboard.writeText(display.value);
  if (display.value === "") {
    return;
  }

  copy.textContent = "Copiado!";

  setTimeout(() => {
    copy.textContent = "Copiar";
  }, 1500);
}

function valid() {
  score = 0;
  if (pass.length < 8) {
    score += 10;
  } else if (pass.length < 12) {
    score += 25;
  } else if (pass.length < 16) {
    score += 35;
  } else if (pass.length >= 16) {
    score += 50;
  }

  if (letters.checked) {
    score += 10;
  }

  if (numbers.checked) {
    score += 15;
  }

  if (symbols.checked) {
    score += 25;
  }

  if (score > 100) {
    score = 100;
  }
}

function drawWrite() {
  level.style.width = score + "%";

  if (score < 30) {
    level.style.backgroundColor = "red";
    desc.textContent = "Fraca";
  } else if (score < 70) {
    level.style.backgroundColor = "orange";
    desc.textContent = "Média";
  } else {
    level.style.backgroundColor = "green";
    desc.textContent = "Forte";
  }
}

function initDrag() {
    x = event.clientX;
    y = event.clientY;

    winX = win.offsetLeft
    winY = win.offsetTop
}

