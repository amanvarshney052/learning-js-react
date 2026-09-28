const add =(a,b)=>a+b;
const subtract =(a,b)=>a-b;
const multiply =(a,b)=>a*b;
const divide =(a,b)=>a/b;
function calculate(a, b, operation) {
    return operation(a, b);
}
const result= calculate(10, 5, add);
console.log(result); 