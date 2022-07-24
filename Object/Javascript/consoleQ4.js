//Check whether the Object has a parameter or not
//Complete the function in the editor. In which you are given an object as a parameter. You have to return "false" 
//if there is no parameter in the object otherwise return "true".

function Check(obj1) {
    let param = Object.entries(obj1).length >= 1 ? ("true") : ("false");
    return (param);
}
console.log(Check("1"));
// Sample Input
// 1

// Sample Output
// true

