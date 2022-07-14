//Unique Color Shirt
//Prepbuddy is very tasteful of clothes. He has N numbers of shirts hanging in the hanger in his wardrobe.Prepbuddy likes to wear different colored clothes. So, whenever he see there are two or more shirts with the same color, he removes all the shirt of that color from his wardrobe. Now, he wants to know how many M
//unique color shirts are left in the wardrobe. Prepbuddy wants you to find M.
//Note: As there are many shades of a color so consider integers as a color name.
//i.e, color of shirt is 0,1,2, … , N.

function Unique_Shirts(arr, N) {

    let remains = 0;
    for (let i = 0; i < arr.length; i++) {

        var count = [];
        for (let j = 0; j < arr.length; j++) {

            if (arr[i] == arr[j]) {
                count++;
            }

        }
        if (count == 1) {
            remains++;
        }
    }
    return (remains);
}

// Input
// 6
// 3 2 4 1 2 3

// Output
// 2