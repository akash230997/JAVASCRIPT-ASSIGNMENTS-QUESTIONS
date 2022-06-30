//You are provided with a table containing some characters and their corresponding values. Your task will be to find the value from the table corresponding to an input character and return it.

// | P or p 	- PrepBytes      	|
// | Z or z - Zenith |
// | E or e - Expert Coder |
// | D or d - Data Structure |

// Note: You have to complete getValue function. No need to take any input.
// Input Format :
// The first and the only line of the input contains a character C, representing the character that you will get in input.
//Output Format :
// Return the value corresponding to the input character.

var a = "E";

const getValue = (a) => {
    if (a === "P"|| a==="p") {
        return ("PrepBytes");
    } else if (a === "Z" || a === "z"){
        return ("Zenith");
    } else if (a === "E" || a === "e") {
        return (" Expert Coder");
    } else if (a === "D" || a === "d") {
        return ("Data Structure");
    }else{
        return ("NO!! RESULT FOUND");
    }
};

console.log(getValue("E"));
