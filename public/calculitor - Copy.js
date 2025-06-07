const result = document.getElementById("result");
const history = document.getElementById("history");
let numbers = "";
let historyList = [];

function updateresult() {
  result.innerText = numbers || "0";
}
function evaluateExpression() {
  const changesNumber = numbers
    .replace(/×/g, "*")
    .replace(/÷/g, "/")
    .replace(/−/g, "-")
    .replace(/%/g, "%");

  
  if (changesNumber && /[0-9+\-*/%.() ]+$/.test(changesNumber)) {
    const newResult = eval(changesNumber);
    historyList.push(`${numbers} = ${newResult}`);
    numbers = newResult.toString();
    updateresult();
  } else {
    numbers = "";
    result.innerText = "Error";
  }
}
document.querySelectorAll(".btn, button").forEach((btn) => {
  btn.addEventListener("click", () => {
    const value = btn.innerText.trim();
    switch (value) {
      case "=":
        evaluateExpression();
        break;
      case "C":
        numbers = "";
        updateresult();
        break;
      case "DEL":
        numbers = numbers.slice(0, -1);
        updateresult();
        break;
      case "+/-":
        if (numbers) {
          if (numbers.startsWith("-")) {
            numbers = numbers.slice(1);
          } else {
            numbers = "-" + numbers;
          }
          updateresult();
        }
        break;
      default:
        numbers += value;
        updateresult();
    }
  });
});

history.addEventListener("click", () => {
  if (history.innerHTML === "") {
    history.innerHTML = historyList
      .map(item => `<div>${item}</div>`)
      .join('');
  } else {
    history.innerHTML = "";
  }
});