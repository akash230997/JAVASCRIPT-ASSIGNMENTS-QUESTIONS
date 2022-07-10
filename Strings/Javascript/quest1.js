//Strings : Questions =>

// Count Characters : You are given a string S , and your task is to return an array B (having a size of 2), where B[0]contains the count of character A(uppercase) in string S and B [1] contains the count of character D(uppercase) in string.
// Note: You have to complete countCharacters function. No need to take any input.

// Input Format : The first and the only line of the input contains a string S.

// Output Format : Return array B as output.
// console.log("Hello World");
const countCharacters = (S) => {
    let A = 0;
    let D = 0;
    for(let a = 0; a < S.length; a++){
        if(S[a] === "A"){
            (A++);
        }else if(S[a] === "D"){
            (D++);
        }
    }
    let B = [A,D];
    return B;
};

console.log(countCharacters('AbaDd'));
