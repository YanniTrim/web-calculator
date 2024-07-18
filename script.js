const displayText = document.querySelector("p");
let currentOp ='';
let val1;
let val2;
let toReplace;

function add(n1, n2) {return n1+n2;}
function sub(n1, n2) {return n1-n2;}
function mul(n1, n2) {return n1*n2;}
function divide(n1, n2) {return n1/n2;}


function operate(val1, val2, operator) {
    switch (operator) {
        case "+":
            currentOp = '';
            return add(val1, val2);
        case "-":
            currentOp = '';
            return sub(val1, val2);
        case "*":
            currentOp = '';
            return mul(val1, val2);
        case "/":
            currentOp = '';
            return divide(val1, val2);
    }
}

function operatorCall(symbol) {
    if (currentOp != '') {
        console.log(currentOp);
        displayText.textContent = operate(val1, parseFloat(displayText.textContent), currentOp);
    }
    val1 = parseFloat(displayText.textContent);
    currentOp = symbol;
    toReplace = true; //get ready for new value 
}

function equalsCall() {
    if (!currentOp) {
        return;
    }
    else {
        val2 = parseFloat(displayText.textContent);
        displayText.textContent = operate(val1, val2, currentOp);
        toReplace = true;
    }
}




function printNum(num) {
    if (toReplace) {
        displayText.textContent ='';
        toReplace = false;
    }
    displayText.textContent+=num;
}

// GIVE NUMPAD FUNCTIONALITY
const numberButtons = document.getElementsByClassName("numberButton")
for (let i=0; i<numberButtons.length; i++) {
    let button = numberButtons.item(i);
    button.addEventListener("click", function() {
        printNum(button.textContent);
    });
}

//GIVE OPERATION BUTTONS FUNCTIONALITY
const operatorDiv = document.querySelector(".operators");
const opButtons = operatorDiv.querySelectorAll('button');
console.log(currentOp);
for (let i=0; i < opButtons.length-1; i++) {
    let button = opButtons.item(i);
    button.addEventListener("click", function() {
        operatorCall(button.textContent);
    });
    console.log(button.textContent);
}
let eqButton = opButtons.item(opButtons.length-1);
eqButton.addEventListener("click", function() {
    equalsCall();
});
