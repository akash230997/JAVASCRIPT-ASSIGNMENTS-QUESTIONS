// Count the Heads

// Tina is given a string  S which contains the first letter of all the student names in her class. She got a curiosity to check how many people have their names starting from the same alphabet. So given a string S , she decided to write a code that finds out the count of characters that occur more than once in the string.

// Note: You have to complete Count Head function. No need to take any input.

// Input Format:
// The first and the only line of the input contains a string S (with no space and contains only lowercase letters).

// Output Format:
// Return updated String S as output, where the string contains the charcter followed by their occurrence(if greater than 1) in alphabetical order.

// Sample Input : prepbytes

// Sample Output : e2p2
var Count_Occ = (s) => {
    let heads = '',
        stringSet = new Set(s.split('')),
        arr = [],
        count = 0;
    for (const values of stringSet) {
        arr.push(values);
    }
    arr.sort();

    for (let i = 0; i < arr.length; i++) {
        let count = 0;
        for (let j = 0; j < s.length; j++) {
            if (arr[i] === s[j]) {
                count++;
            }
        }
        if (count > 1) {
            heads += arr[i] + count;
        }
    }
    return heads;
};


console.log(Count_Occ("prepbytes"));

