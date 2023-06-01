const buttons = document.querySelectorAll("button");
const screen = document.querySelector("#display");

let displayValue = [];
let calculation;

function calculate(button){
  const btValue = button.textContent;
  //condição: se clicar no clear o display será limpo
  if (btValue === "CLEAR"){
    displayValue = [];
    screen.textContent = " ";
  } 
  //condição: se clicar no = será feito o cálculo dos valores contidos no array, usando a function eval 
  else if (btValue === "="){
    screen.textContent = eval(calculation);
  } 
  //ao clicar qualquer outro botão o valor será inserido no array e aparecerá no display
  else{
    displayValue.push(btValue);
    calculation = displayValue.join("");
    screen.textContent = calculation;
  }
}

buttons.forEach(button => button.addEventListener("click", () => calculate(button)));
