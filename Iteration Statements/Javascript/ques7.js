//Check whether a Number is a prime or not. :
//Write a program which takes  a number from user and check whether number is prime number or not a prime number.
// Note: You have to complete Prime_Check.No need to take any input.

//Input Format : The input contains a single number N.
//Output Format : Return "YES" if the given number is Prime, else print "NO"(without quotes).


const Prime_Check = (N) => {
    let temp = N;
    let i = 1;
    let count = 0;
    while (i < temp) {
        if (temp % i === 0) {
            count++;
        }
        i++;
    }
    if (count === 1) {
        return ('YES');
    }
    else {
        return ('NO');
    } 

};
