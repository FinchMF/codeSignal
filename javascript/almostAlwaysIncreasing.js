/*
Given a sequence of integers as an array, 
determine whether it is possible to obtain a strictly 
increasing sequence by removing no more 
than one element from the array.
*/

function solution(sequence) {
    
    let result = true;
    let counter = 0
    
    for(let i=1; i<sequence.length; i++) 
    
    if (sequence[i]<=sequence[i-1]) {
        
        counter++
        let look_behind = sequence[i] <= sequence[i-2]
        let look_ahead = sequence[i + 1] <= sequence[i - 1]
        
        if (counter > 1) {
            result = false;
        }
        if (look_behind && look_ahead) {
            result = false;
        }
    }
    return result
}