// Even Odd.
// You are given an array A containing N integer elements, and your task is to return an array B(having a size equal to 2)
// where B[0] contains the sum of all even elements of array A and B[1] has the sum of all odd elements of the array A.
// Note: You have to complete findEvenOdd function. No need to take any input.

const findEvenOdd = (N, Arr) => {
    let sum = [0, 0];
    for (let i = 0; i < N; i++) {
        if (Arr[i] % 2 === 0) {
            sum[0] += Arr[i];
        }
        else {
            sum[1] += Arr[i];
        }
    }
    return (sum);
};

// Sample Input
// 7
// 1 2 3 4 5 6 7

// Sample Output
// 12 16
