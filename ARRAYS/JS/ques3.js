//Count Occurrences
//You are given an array A containing N integer elements and an integer K, and your task is to return the count of occurrences of K in array A.
//Note: You have to complete findCount function. No need to take any input.

// Input Format : The first line of the input contains two space - separated integers N and K, denoting the number of elements in the array A and the element whose count needs to be determined, respectively.The second line of the input contains N space - separated integers, denoting the elements of the array A.

//Output Format : Return the count of occurrences of K in array A.
//Sample Input : 4 , 3 , 3 3 1 2
//N = 4 , K = 3 , Arr = [3,3,1,2].
// Sample Output : 2


const findCount = (N, K, Arr) => {
    let value = 0;
    for(let a = 0; a < K; a++){
        if(Arr[a] == 3){
            value++;
        }
    } 
    return value;
};

console.log(findCount(3, 4, [3, 3, 1, 2]));






//Practice Question:
// for(var i =0; i < 10; i++){
//     setTimeout(function(){
//         console.log(i);
//     },i*1000);
// }