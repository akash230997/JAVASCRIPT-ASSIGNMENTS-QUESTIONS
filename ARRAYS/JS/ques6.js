//Higher Age.
//You are given an array A containing the age of persons in your locality, and your task is to find and return an array containing the age of persons that are over 18(18 included).
//Note: Also, in the output array, the age should be in the same order as in the input array. You have to complete highAge function. No need to take any input.

const highAge = (N, Arr) => {
    let filterArr = Arr.filter(item => item >= 18);
    return (filterArr);
};

// Sample Input
// 6
// 11 23 3 45 72 68

// Sample Output
// 23 45 72 68