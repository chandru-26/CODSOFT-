let display = document.getElementById("display");
let currentInput = "";

function appendValue(value) {
  currentInput += value;
  display.value = currentInput;
}

function clearDisplay() {
  currentInput = "";
  display.value = "";
}

function calculateResult() {
  try {
    display.value = eval(currentInput); // Evaluates the mathematical expression
    currentInput = display.value; // Store result for further calculations
  } catch (error) {
    display.value = "Error";
    currentInput = "";
  }
}
