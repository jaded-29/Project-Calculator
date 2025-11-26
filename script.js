function add(a,b){
    return a+b;
}
function subtract(a,b){
    return a-b;
}
function multiply(a,b){
    return a*b;
}
function divide(a,b){
    return a/b;
}
function operate(a,b,c){
    a = parseFloat(a);
    c = parseFloat(c);
    let current = 0;
    switch(b){
        case '+':
            current = add(a,c);
            break;
        case '-':
            current = subtract(a,c);
            break;
        case 'x':
            current = multiply(a,c);
            break;
        case '/':
            current = divide(a,c);
            break;
        default:
            alert("Unknown operator");
            return Error;
    }
    displayval = current;
    display.textContent = displayval;
    return current;
}
let n1 = 0;
let op = '';
let n2 = 0;
let displayval = '';
let cn = 0;
let temp = 0;
let btncounter = document.querySelectorAll("button");
const display = document.querySelector("#display");
btncounter.forEach(btn =>{
    btn.addEventListener('click', ()=>{
        if(btn.classList.contains("digits")){
            displayval = displayval + btn.textContent;
            display.textContent = displayval;
        }
        else if(btn.classList.contains("operators")){
            if(cn%2 === 1){
                n2 = displayval.split(/[+-\/x]/).pop();
                displayval = displayval + n2;
                n1 = displayval.split(/[+-\/x]/)[0];
                const ops = displayval.match(/[*+\-\/]/g);
                op = ops[ops.length - 1];   
                temp = operate(n1,op,n2);
                n1 = temp;
                op = btn.textContent;
                displayval = n1;
                displayval = displayval + btn.textContent;
                display.textContent = displayval;
            }
            else{
                n1 = displayval;
                op = btn.textContent;
                displayval = displayval + btn.textContent;
                display.textContent = displayval;
                cn++;
        }}
        else if(btn.classList.contains("equalsto")){
            n2 = displayval.split(/[+-\/x]/)[1];
            let tn = operate(n1,op,n2);
            op='';
        }
        else if(btn.classList.contains("clearall")){
            n1 =0;
            n2=0;
            op='';
            displayval = '';
            display.textContent = displayval;
        }
    })
})
