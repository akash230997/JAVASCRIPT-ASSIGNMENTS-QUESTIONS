// PrepBuddy wants you to get familiar with various Relational operators.He provides you with two integer values X and Y and asks you to find the relation between them.
// The relationships between integers X and Y are as follows:
//
// If X < Y , it means that X is smaller than Y.
// If X > Y, it means that X is greater than Y.
// If X = Y, it means that X is equal to Y.
// Note: You have to complete findRelationship function. No need to take any input.

//Input Format:
// The first and the only line of the input contains two space - separated integers X and Y, denoting the integers which PrepBuddy gives you.

//Output Format:
// Return the relationship between the integers that PrepBuddy gave you.
//sample input : 3, 11
//sample outpur : 3 is smaller than 11.
function findRelation(x, y) {
     
}
console.log(findRelation(3, 11));
if (x < y) {
    return (x + " is smaller than " + y + ".");
} else if (x > y) {
    return (x + " is greater than " + y);
} else if (x = y) {
    return (x + " is equal to " + y);
} else {
    return ("JAI MATA DI!!");
}


function findRelation(x,y){
    if(x<y){
        return (x+" is smaller than "+y+".");
    }else if(x>y){
        return (x +" is greater than "+y);
    }else if(x=y){
        return (x + " is equal to " + y);
    }else{
        return("JAI MATA DI!!");
    }
}
console.log(findRelation(3,11));