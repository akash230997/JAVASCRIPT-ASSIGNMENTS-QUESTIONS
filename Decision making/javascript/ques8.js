//You are given 3 distinct integers X , Y , Z and your task is to find and return the second smallest integer among the three provided integers.
//Note: You have to complete findSndSmallest function. No need to take any input.

//Input Format : The first and the only line of the input contains three space-separated integers
// X , Y , and Z , denoting the integers among which you have to find the second smallest element.
// Output Format : Return the second smallest integer among the three integers given to you.

const findSndSmallest = (x, y, z) => {
    if ((x < y && y < z) || (x > y && y > z)) {
        return y;
    }
    if ((y < x && x < z) || (y > x && x > z)) {
        return x;
    }
    else {
        return z;
    }
};
console.log(findSndSmallest(2 , 9 , 23));
