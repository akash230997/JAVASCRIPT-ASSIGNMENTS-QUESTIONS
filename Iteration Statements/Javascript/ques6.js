//Print the Pattern.
//Write a program which ask user for no of lines and print a pattern using an asterik .
// Note: You have to complete Print_pattern.No need to take any input.

//Input Format : The input contains a single number N.
//Output Format : Print the required pattern.

// Sample Input 5
// Sample Output
// *
// **
// ***
// ****
// *****

const Print_pattern = (N) => {
    for (var a = 0; a <= N; a++) {
        let firstColumn = '';
        for (var b = 0; b < a; b++) {
            firstColumn = firstColumn + "*";
        }
        console.log(firstColumn);
    }
};

Print_pattern(5);
