// check if string is a palindrome

function solution(inputString) {
    
    let result = true;
    let i = 0;
    let j = inputString.length - 1;
    
        while (i < j){
            if (inputString[i] != inputString[j]){
                result = false;
            }
            i++;
            j--;
        }
    return result
}