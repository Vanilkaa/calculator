const display = document.querySelector("#display");
const inputs = Array.from(document.querySelectorAll(".input"));
const backspace = document.querySelector("#backspace");
const clear = document.querySelector("#clear");
const operators = Array.from(document.querySelectorAll(".operation"));
const operate = document.querySelector("#operate");

let clearDisplayForNum2 = true;
inputs.forEach((input) => input.onclick = () => {
            if(operator != undefined && clearDisplayForNum2 == true) {
                display.textContent = "";
                clearDisplayForNum2 = false;
            }
            if(display.textContent.length > 9 || 
                input.textContent == "." && 
                display.textContent.includes(".")) return;
            display.textContent == "0" && 
            input.textContent != "." ?
                display.textContent = (input.textContent) :
                display.textContent += (input.textContent);
            });

backspace.onclick = () => { if(display.textContent.length == 1) {
        display.textContent = "0";
        return;
    }
    display.textContent = display.textContent.slice(0, -1);
}

clear.onclick = () => {
    display.textContent = "0";
    num1 = num2 = operator = undefined;
    clearDisplayForNum2 = true;
}

let num1, num2, operator;

operators.pop();
operators.forEach((e) => e.onclick = () => {
    if(num1 != undefined) {
        operate.onclick();
    }
    num1 = +display.textContent;
    operator = e.textContent;
});

operate.onclick = () => {
    if(num1 == undefined) return;
    num2 = +display.textContent;
    let solution = solve(operator, num1, num2);
    solution = parseFloat(solution.toString()).toString(); 
    if(solution.length > 10) {
        if(!solution.includes(".")) {
            solution.slice(0, 10);
        } else {
            solution = Number(solution).toFixed(9 - solution.split(".")[0].length);
        }
    }
    display.textContent = num2 == 0 && operator == "/" ?
        "nah" : solution;
    num1 = num2 = operator = undefined;
    clearDisplayForNum2 = true;
}

function solve(operator, num1, num2) {
    switch(operator) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "*":
            return num1 * num2;
        case "/":
            return num1 / num2;
    }
}

