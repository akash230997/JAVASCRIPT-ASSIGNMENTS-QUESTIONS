//Find the sum of the digits of a given number.
//Write a program that takes a number from the user and get the sum of the digits present in the number.
// Note: You have to complete Number_Sum.No need to take any input.
// Input Format : The input contains a single number N.
// output: Return the sum of the digits of the number.

//sol.
// console.log("Hello World");
const Number_Sum = (N) => {
    let add = 0;
    while(N!==0){
    let value = N % 10;
    N = parseInt(N/10);
    add = add + value;
}
    return (add);
};

console.log(Number_Sum(1234));

