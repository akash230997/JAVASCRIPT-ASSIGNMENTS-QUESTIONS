// Delete a Property:
//Complete the function in the editor. You have an object as a parameter. In which you have to delete the rollno property from the object and return the object.

function Check(obj1) {
    if (delete obj1.rollno) {
        return ("True");
    }
    else {
        return ("False");
    }
}

// Sample Input
// Utkarsh
// 129

// Sample Output
// True
