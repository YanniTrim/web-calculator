function add(n1, n2) {return n1+n2;}
function sub(n1, n2) {return n1-n2;}
function mul(n1, n2) {return n1*n2;}
function divide(n1, n2) {return n1/n2;}


function operate(val1, val2, operator) {
    switch (operator) {
        case "+":
            return add(val1, val2);
        case "-":
            return sub(val1, val2);
        case "*":
            return mul(val1, val2);
        case "/":
            return divide(val1, val2);
    }
}

const displayText = document.querySelector("p");
let inDisplay;


function printNum(num) {
    displayText.textContent+=num;
    inDisplay = displayText.textContent;
}

const numberButtons = document.getElementsByClassName("numberButton")
for (let i=0; i<numberButtons.length; i++) {
    let button = numberButtons.item(i);
    button.addEventListener("click", function() {
        printNum(button.textContent);
    });
}