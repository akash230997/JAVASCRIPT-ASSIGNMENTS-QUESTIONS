//Write a program takes takes three angles and checks whether the triangle is acute or obtuse.

// Note: You have to complete Triangle_Check.No need to take any input

// Input Format :
//The input contains three numbers A , B and C which denotes the angles of a triangle.


const Triangle_Check = (A, B, C) => {
    if (A < 90 && B < 90 && C < 90) {
        return "acute";
    } else if (A > 90 || B > 90 || C > 90) {
        return "obtuse";
    } else {
        return "Please enter correct angles";
    }

};

console.log(Triangle_Check(60,100,20));