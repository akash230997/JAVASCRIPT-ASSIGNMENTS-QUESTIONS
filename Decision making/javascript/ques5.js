//Your school has the following grading system based upon the marks(a) obtained by a student:
// If M≤10,the grade will be E
//If 11≥M≤20, the grade will be D.
//If 21≥M≤30, the grade will be C.
// If 31 ≥ a ≤ 40, the grade will be B.
// If 41 ≥ a ≤ 50, the grade will be A.
// Your friend will enter his marks out of 50, and your task is to print his grades using a switch statement
//Note: You have to complete findGrades function. No need to take any input.

// Input Format
// The first and the only line of the input contains an integer a , representing the marks that your friend will enter in the grading system.
// Output Format
// Return the grade obtained by your friend.

const findGrades = (a) => {
   switch (true) {
       case (a <= 10):
           return "E";

       case (11 >= a && a <= 20):
           return "D";

       case (21 >= a && a <= 30):
           return "C";

       case (31 >= a && a <= 40):
           return "B";

       case (41 >= a && a <= 50):
           return "A";
    default:
           return "PUT A VALID DATA";
   }
};

console.log(findGrades(1));



// const findGrades = (a) => {
//     if(a <= 10){
//         return ("the grade will be E.");
//     }else if(11 >= a && a <=20){
//         return ("the grade will be D.");
//     }else if(21 >= a && a <= 30){
//         return ("the grade will be C.");
//     }else if(31 >= a && a <= 40) {
//         return ("the grade will be B.");
//     }else if(41 >= a && a <= 50){
//         return ("the grade will be A.");
//     }else{
//         return ("NICE!!");
//     }
// };


// const findGrades = (a) => {
//     switch (true) {
//         case (a <= 10):
//             return ("E");

//         case (11 >= a && a <= 20):
//             return ("D");

//         case (21 >= a && a <= 30):
//             return ("C");

//         case (31 >= a && a <= 40):
//             return ("B");

//         case (41 >= a && a <= 50):
//             return ("A");
//         default:
//             return ("Please enter a right value!!");
//     }
// };


