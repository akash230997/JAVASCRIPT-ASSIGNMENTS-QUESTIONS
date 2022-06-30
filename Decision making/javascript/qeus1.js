// Calculator :
// Write a program to make a simple calculator using switch statement that takes operator and two numbers from user and print the result after operation.

// Note: You have to complete Calculator.No need to take any input

// Input Format - The input contains a operator symbol( +,−,∗,) along with two natural numbers B and C.

//Return the required result.
//given inputs:

// using Switch Statement :


function Calculator(A, B, C) {
    
    switch (A) {
        case "+":
            console.log((B + C));
            break;
        case "-":
            console.log((B - C));
            break;
        case "*":
            console.log((B * C));
            break;
        case "/":
            console.log((B / C));
            break;
        default:
            ("No!! Values")
            break;
    }
    // value = A;
    return A;
};
Calculator("+" , 1 ,  2);







// const Calculator = (A, B, C) => {
//     switch (A) {
//         case "+":
//             return (B + C);
//             break;

//         case "-":
//             return (B - C);
//             break;

//         case "*":
//             return (B * C);
//             break;

//         case "/":
//             return (B * C);
//             break;

//         default:
//             return ("No!! Result Fount");
//     }

// };



// var day = "WEDNESDAY";

// var b = 2;

// var c = 3;

// switch(day){
//     case "MONDAY" :
//         console.log("TODAY IS MONDAY");
//         console.log((b + c));;
//     break;

//     case "TUESDAY" :
//         console.log("TODAY IS TUESDAY");
//         console.log((b - c));
//     break;

//     case "WEDNESDAY" :
//         console.log("TODAY IS WEDNESDAY " + (b * c));
//     break;

//     case "THURSDAY" :
//         console.log("TODAY IS THURSDAY");
//         (b / c);
//     break;

//     case "FRIDAY" :
//         console.log("TODAY IS FRIDAY");
//         (b % c);
//     break;

//     case "SATURDAY" :
//         console.log("TODAY IS SATURDAY");
//         (b ** c);
//     break;

//     case "SUNDAY" :
//         console.log("TODAY IS SUNDAY");
//         (b += c);
//     break;

//     default : 
//     console.log("oPPS");
// }

// return value;