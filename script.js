let input = document.getElementById("result");

function keyValue(char) {
  input.value += char;
}

function clearCalc() {
  input.value = "";
}

function calculate() {
  input.value = eval(input.value);
  
}
