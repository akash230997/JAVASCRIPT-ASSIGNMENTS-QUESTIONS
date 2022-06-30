//Check whether the condition is fulfilled or not?

//Write a program that takes a number and prints whether the number is divisible by 6 and 9  or not.
// Note: You have to complete Check_divisibility.No need to take any input

//The input contains a single number N.

// If the condition is satisfied return "Divisible by both"(without quotes) else return "Not Divisible by both"(without quotes). 

const Check_divisibility = (N) => {
    if ((N % 6 == 0) && (N % 9 == 0)){
        return ("Divisible by both");
    }else{
        return ("Not Divisible by both");
    }
};

console.log(Check_divisibility(36,27));
// inputs : 36 , 27;