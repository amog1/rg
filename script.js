// RGB Colors
previewBtnEl.addEventListener("click", rgb);

// Variables to store HTML elements
let previewBtnEl = document.getElementById("previewBtn");
let redInEl = document.getElementById("num1");
let greenBtnEl = document.getElementById("num2");
let blueBtnEl = document.getElementById("num3");
let displayBtnEl = document.getElementById("display");
let text = document.getElementById("colour");
// function
function rgb() {
  // input
  let n1 = +redInEl.value;
  let n2 = +greenBtnEl.value;
  let n3 = +blueBtnEl.value;

  // VAlidate colours (Costrain colours between 0 - 255)
  if (n1 < 0) {
    n1 = 0;
  }

  // process
  let myColor = `rgb(${n1}, ${n2}, ${n3})`;

  // output
  displayBtnEl.style.background = myColor;
  text.innerHTML = myColor;
}

document.getElementById("black").addEventListener("click", bl);

// function

function bl() {
  document.getElementById("display").style.backgroundColor = "black";
  document.getElementById("colour").innerHTML = myColor;
}

document.getElementById("white").addEventListener("click", wh);

function wh() {
  displayBtnEl.style.backgroundColor = "white";
  text.innerHTML = myColor;
}

// the second part
