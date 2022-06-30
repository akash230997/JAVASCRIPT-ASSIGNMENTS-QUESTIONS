
// QUESTION: 3
//Check the conditons :
//You are given two numbers A and B. You need to do the following checks:
// 1.if both are divisible by 10 console true.
// 2.if both are not divisible by 10 console false.
// 3.if one of them only is divisible by 10 console true.
// Use operator to do this.
//The first line contains two natural numbers A and B.
// Output Format:
// Return the required result.

// Firstly we use conditional (ternary) operation for that:
// condition 1:
//if both are divisible by 10 console true.
// let a = 12 , b = 20;

// var value = (a % 10 == 0 && b % 10 == 0) ? true : false;
// console.log(`1. ${value}`);


// var value = (a % 10 != 0 && b % 10 != 0) ? true : false;
// console.log(`2. ${value}`);


// var value = (a % 10 == 0 || b % 10 != 0) ? true : false;
// console.log(`3. ${value}`);

// function check(A, B) {
//     if (A % 10 == 0 && B % 10 == 0) {
//         console.log(true);
//     } else if (A % 10 != 0 || B % 10 == 0) {
//         console.log(false);
//     } else {
//         return false;
//     }
// }

// check(12,20);

const Check = (A, B) => {
    return ((A % 10 == 0 && B % 10 == 0) || (A % 10 == 0 && B % 10 == 0)) ? "true" : "false";
};

console.log(Check(12, 20));

// ((A % 10 === 0 && B % 10 === 0) || (A % 10 === 0 || B % 10 === 0)) ? "true" : "false";