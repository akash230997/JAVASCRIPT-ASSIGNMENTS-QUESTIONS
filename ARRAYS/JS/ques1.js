///Find the Product.
//Write a program that takes an array as input from the user and find out the product of the elements.
// Note: You have to complete Find_Prod.No need to take any input.
//Input Format : The input contains a single number N, followed by N numbers as array elements.

//Output Format : Return the required answer.

// Sample Input : 5  / 1 2 3 4 5

// Sample Output : 120

// const arrya = 5;
// const N = [1,2,3,4,5];
// const Find_Prod = (array, N) => {
//     const item = array.reduce((acc, curr) => acc*=curr);
//     console.log(item);
// };

// Find_Prod([1,2,3,4,5],5);

const Find_Prod = (array, N) => {
    let sum = 1;
    for (let i = 0; i < array.length; i++) {
        sum *= array[i];
    }
    return sum;
};

console.log(Find_Prod([1, 2, 3, 4, 5], 5));