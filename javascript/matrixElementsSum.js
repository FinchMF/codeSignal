
/*
After becoming famous, the CodeBots decided to move into a new building together. 
Each of the rooms has a different cost, and some of them are free, 
but there's a rumour that all the free rooms are haunted! 

Since the CodeBots are quite superstitious, 
they refuse to stay in any of the free rooms, 
or any of the rooms below any of the free rooms.

Given matrix, a rectangular matrix of integers, 
where each value represents the cost of the room, 
your task is to return the total sum of all rooms 
that are suitable for the CodeBots 
(ie: add up all the values that don't appear below a 0).
*/


function solution(matrix) {
    
    let total = 0;
    let cols = matrix[0].length
    
    for (let row = 0; row<cols; row++) {
        
        for (let idx = 0; idx<matrix.length; idx++) {
            
            if ( matrix[idx][row] === 0 ) {
                break;
            } 
            
            total += matrix[idx][row]
        
        }
        
    }
    
    return total
}