//Print Numbers
//You are given an integer N, and your task is to print all the integers starting from 1 till N(N inclusive).
//Note: You have to complete printNumbers function. No need to take any input.

//Input Format : The first and the only line of the input contains an integer N
//Output Format : Print all the numbers starting from 1 till N(including N).

//Sample Input : 4

//Sample Output : 1 2 3 4

const printNumbers = (n) => {
    for(var a = 1; a < n; a++){
        console.log(a);
    }
};

printNumbers(4);