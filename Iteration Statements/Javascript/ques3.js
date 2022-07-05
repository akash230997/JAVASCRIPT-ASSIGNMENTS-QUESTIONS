//Find Sum :
//You are given an integer N, and your task is to find the sum of all the even integers starting from 1 upto N (N inclusive).
// Note: You have to complete findSum function. No need to take any input.
//Input Format
//The first and the only line of the input contains an integer N.
//OUTPUT : Return the sum of all even integers from 1 upto N (N inclusive).


const findSum = (n) => {
    let sum = 0; 
    for(vi =0; vi <= n; vi +=2){
        sum = sum + vi;
    }
    return sum;
};

console.log(findSum(6));

// function evenSum(n) {
//     let curr = 2, sum = 0;

//     // sum of first n even numbers
//     for (let i = 1; i <= n; i++) {
//         sum += curr;

//         // next even number
//         curr += 2;
//     }

//     // required sum
//     return sum;
// }