const displayText = document.querySelector("p");
let currentOp;
let val1;
let val2;

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
    // if (currentOp != undefined || currentOp != '') {
    //     displayText.textContent = operate(val1, parseInt(displayText.textContent), currentOp);
    // }
    val1 = parseInt(displayText.textContent);
    currentOp = symbol;
    displayText.textContent = ""; //get ready for new value 
}

function equalsCall() {
    if (!currentOp) {
        return;
    }
    else {
        val2 = parseInt(displayText.textContent);
        displayText.textContent = operate(val1, val2, currentOp);
    }
}




function printNum(num) {
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
