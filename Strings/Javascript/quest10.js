//Match the Strings
//You are given two strings S1 and S2, task is to print  YES,if both strings are same else print NO.
//Note: You have to complete String_Match function. No need to take any input.

var String_Match = (S1, S2) => {
    var result = S1.localeCompare(S2);
    if (result === 0) {
        return ("YES");
    }
    return ("NO");
};

console.log(String_Match("Prepbytes", "Prepbytes"));

