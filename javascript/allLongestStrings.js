/*

Given an array of strings, 
return another array containing all of its longest strings.

*/


function solution(inputArray) {
    
    let lengths = []
    let longest = 0
    let final = []
    
    
    for ( let i = 0; i<inputArray.length; i++ ) {
        
        lengths.push({
            STRING: inputArray[i],
            LENGTH: inputArray[i].length
        })
        
        if ( longest < inputArray[i].length ) {
            longest = inputArray[i].length
        }
    
    }

    for ( let i = 0; i<lengths.length; i++) {
        
        if (lengths[i].LENGTH == longest) {
            final.push(lengths[i].STRING)
        }
    }
    
    
    return final

}