//Find the Fives.
//Among all the digits from 0−9, PrepBuddy likes number 5. He has a number and wants you to find out the number of times 5 occurred in the given number.
// Note: You have to complete Find_Five.No need to take any input.
//Input Format: The input contains a single number N.
//Output Format : Return the number of fives as the desired output.

// Sample Input
// 345654

// Sample Output
// 2

const Find_Five = (N) => {
    let c = 0;
    while (N > 0) {
        r = N % 10;
        N = parseInt(N / 10);
        if (r == 5) {
            c++;
        }
    }
    return c;
};

console.log(Find_Five(345654));














