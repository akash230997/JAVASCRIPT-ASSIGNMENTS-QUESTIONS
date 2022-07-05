//Print the Odds.
//Write a program which takes  a number from user and print all odd numbers in between 2 and N, but print 2 first.
// Note: You have to complete Print_Odd.No need to take any input.

//Input Format : The input contains a single number N.
//Output Format : Print the desired output.
// N = 10;
// Sample Output
// 2
// 3
// 5
// 7
// 9
// console.log('Hello world');


const Print_Odd = (N) => {
    console.log(2);
    var a = 3;
    while(a < N){
        console.log(a);
        a += 2;
    }
};

Print_Odd(10);
