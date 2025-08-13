const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");

let expression = "";

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const val = button.innerText;

    if (val === "=") {
      try {
        const replaced = expression
          .replace(/×/g, "*")
          .replace(/÷/g, "/")
          .replace(/−/g, "-") // FIX: proper minus
          .replace(/%/g, "/100"); // % as division by 100
        expression = eval(replaced).toString();
      } catch {
        expression = "Error";
      }
      display.value = expression;
    } 
    else if (val === "AC") {
      expression = "";
      display.value = "";
    } 
    else {
      expression += val;
      display.value = expression;
    }
  });
});
