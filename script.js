const displayText = document.querySelector("p");
displayText.textContent = 0;
let currentOp ='';
let val1;
let val2;
let toReplace;
let isDecimal = false;
let zeroError = false;

function add(n1, n2) {return n1+n2;}
function sub(n1, n2) {return n1-n2;}
function mul(n1, n2) {return n1*n2;}
function divide(n1, n2) {
    if (n2==0) {
        zeroError = true;
        return "You fool you cannot divide by 0";
    }
    return n1/n2;
}

function sizeFit(displayNum) {
    return parseInt(displayNum).toFixed(4);
}

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

function operatorCall(symbol) { // TODO make it only work if there is previous value
    if (zeroError) {
        clearAll();
        zeroError = true;
        return;
    }
    if (currentOp != '') {
        console.log(currentOp);
        displayText.textContent = sizeFit(operate(val1, parseFloat(displayText.textContent), currentOp));
    }
    val1 = parseFloat(displayText.textContent);
    currentOp = symbol;
    toReplace = true; //get ready for new value 
    isDecimal = false;
}

function equalsCall() {
    if (!currentOp) {
        return;
    }
    else {
        val2 = parseFloat(displayText.textContent);
        displayText.textContent = sizeFit(operate(val1, val2, currentOp));
        toReplace = true;
        isDecimal = false;
    }
}

function printNum(num) {
    if (toReplace || displayText.textContent===0 || displayText.textContent==="0") {
        displayText.textContent ='';
        isDecimal = false;
        toReplace = false;
        zeroError = false;
    }
    if (displayText.textContent.length <16) {
        displayText.textContent+=num;
    }
    
}

function clearEntry () {
    displayText.textContent = 0;
    isDecimal = false;
}

function clearAll () {
    displayText.textContent = 0;
    val1 = null;
    val2 = null;
    currentOp = '';
    isDecimal = false;
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

//GIVE TOP ROW FUNCTIONALITY
const topRowDiv = document.querySelector(".top-row");
const topRowButtons = topRowDiv.querySelectorAll('button');
topRowButtons.item(0).addEventListener("click", function() {  //CE
    clearEntry();
});
topRowButtons.item(1).addEventListener("click", function() {  //C
    clearAll();
});
topRowButtons.item(2).addEventListener("click", function() {  //Del
    if (displayText.textContent.length > 1) {
        displayText.textContent = displayText.textContent.slice(0, displayText.textContent.length-1);
    } else {
        displayText.textContent = 0;
    }
});

const bottomRow = document.querySelector(".row4");
const bottomButtons = bottomRow.querySelectorAll("button"); 
bottomButtons.item(1).addEventListener("click", function() { //decimal button
    if(!isDecimal) {
        if (toReplace) {
            printNum(0.);
        }
        displayText.textContent+=".";
        isDecimal = true;
    }
    
})
bottomButtons.item(2).addEventListener("click", function() { //+/- button
    displayText.textContent = operate(parseFloat(displayText.textContent), -1, "*");
})

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("mouseover", function () {
        button.style.width = '85px';
        button.style.height = '85px';
        button.style.marginTop= 0;
        button.style.backgroundColor = "rgb(210, 190, 237)";
    })
    button.addEventListener("mouseout", function() {
        button.style.width = '80px';
        button.style.height = '80px';
        button.style.marginTop= "5px";
        button.style.backgroundColor = "rgb(186, 168, 209)";
    })
})