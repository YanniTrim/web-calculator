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

console.log(operate(2,5,"+"));
console.log(operate(2,5,"-"));
console.log(operate(2,5,"*"));
console.log(operate(2,5,"/"));