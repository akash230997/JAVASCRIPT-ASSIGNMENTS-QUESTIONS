//Marks Calculator : 
// Shyam has got his marks in three subjects as A , B and C (out of 100).Write a program to calculate his total marks and his average.
//      Note: You have to complete Sum and Average functions.No need to take any input.

const Sum = (A, B, C) => {
    return (A + B + C);
};
console.log(Sum(50, 20, 100));
const Average = (A, B, C) => {
    return ((A + B + C) / 300 * 100);
};
console.log(Average(50, 20, 100));

