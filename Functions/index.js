console.log("working");

// Create one function with zero parameter having a console statement;

function Bonjour() {
    console.log("I am learning French !!");
}
Bonjour();

// Create one function which takes two values as a parameter and print the sum of them as "Sum of 3, 4 is 7"

function sum(p, n) {
    result = p + n;
    console.log(result);
}
sum(13, 31);

// Create one arrow function

const multiply = (p, n) => {
    result = p * n;
    console.log(result);
}
multiply(10, 10);

// "Print output: 
var x = 21;
var girl = function () {
    console.log(x);
    var x = 20;
};
girl();
// undefined; REASON- JS initialization is not hoisted and since there is a local variable x which is not declared, it will not be executed.

//------------------------------------------------

// "Print output: 
var x = 21;
girl();
console.log(x);
function girl() {
    console.log(x);
    var x = 20;
};
// 21; REASON- functions support hoisting and var x = 21 is in global scope.

//------------------------------------------------

// "Print output

var x = 21;
a();
b();
console.log(a);
a = function () {

    x = 20;
    console.log(x);
};
b = function () {

    x = 40;
    console.log(x);
};

// Uncaught ReferenceError: a is not defined

// Write a function that accepts parameter n and returns factorial of n

function factorial(n) {
    if (n == 1 || n == 0) {
        return 1;
    }
    return n * factorial(n - 1);
}
console.log(factorial(5));
console.log(factorial(1));
console.log(factorial(0));