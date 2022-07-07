//Find the Sum.
//Write a program which takes an array as input from the user and find out the sum of the array elements.
// Note: You have to complete Find_Sum.No need to take any input.

// Input Format : The input contains a single number N, followed by N numbers as array elements.

// Output Format : Return the required answer.


const Find_Sum = (array, N) => {
    // debugger
    let number = 0;
    for(let a = 0; a < array.length; a++){
        number += array[a];
    }
    return number;
};

console.log(Find_Sum([1, 2, 3, 4, 5], 5));