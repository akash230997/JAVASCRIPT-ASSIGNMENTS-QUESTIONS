//Find the first digit of a 4 digit number : 
//You are provided a four digit number N only. Your task is to print out the first digit of that number.
// Note: You have to complete First_Digit function. No need to take any input.
//The first line contains one four digit natural number N.


const First_Digit = (n) => {
    return parseInt(n / 1000);
};
