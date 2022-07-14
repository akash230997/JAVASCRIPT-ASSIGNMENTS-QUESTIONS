//Increment the Array Elements.
//You are provided an array of integers and you have to increment all array elements by 1 and then print whole array.
//You have to complete Inc_Arr. No need to take any input.

const Inc_Arr = (array, N) => {
    let i = 0;
    while (i < array.length) {
        console.log(array[i] + 1);
        i++;
    }
};

// Sample Input
// 5
// 1 2 3 4 5

// Sample Output
// 2 3 4 5 6 