// Given an array of integers, 
// find the pair of adjacent elements that has the largest product 
// and return that product.

function solution(inputArray) {
    
    let largest = inputArray[0] * inputArray[1];

    for ( i = 1; i < inputArray.length -1; i++ ){

        let curr = inputArray[i] * inputArray[i + 1]
        
        if ( largest < curr)  {
            largest = curr;
        }
    }
    return largest
}
