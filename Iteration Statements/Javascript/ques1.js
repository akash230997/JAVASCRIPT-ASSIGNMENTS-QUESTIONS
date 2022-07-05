//Find the number of digits :
//Take a number from the user and print the count of digits in that number.
// Note: You have to complete Find_Digits.No need to take any input.

//Input Format :
//The input contains a single number N.
//Output Format :
//Return the count of digits in the given number.
//Sample input : 1234;
//sample output : 4

const Find_Digits = (N) => {
    for (a = 0; N !== 0; a++){
        N = parseInt(N/10);
    }
    return a;
};

console.log(Find_Digits(1234));
