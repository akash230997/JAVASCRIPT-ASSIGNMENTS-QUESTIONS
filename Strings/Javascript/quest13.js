// Count the Vowels and Consonants
//You are given a string S containing both uppercase and lowercase letters. You need to find out the number of vowels and the number of consonants in the given string.
//Note: You have to complete Count_Vowels function and Count_Consonants function. No need to take any input.


var Count_Vowels = (S) => {
    let theString = S.toLowerCase(),
        letter,
        vowels = "aeiou",
        count = 0;

    for (let i = 0; i < S.length; i++) {
        letter = theString.charAt(i);
        if (vowels.indexOf(letter) > -1) {
            count = count + 1;
        }
    }
    return count;
};


console.log(Count_Vowels("Prepbytes"));


var Count_Consonants = (S) => {
    let theString = S.toLowerCase(),
        letter,
        vowels = "aeiou",
        count = 0;

    for (let i = 0; i < S.length; i++) {
        letter = theString.charAt(i);
        if (vowels.indexOf(letter) == -1) {
            count = count + 1;
        }
    }
    return count;
};

console.log(Count_Consonants("Prepbytes"));