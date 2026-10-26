/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let n = matrix.length; // num of rows
    let m = matrix[0].length; // num of colms

    let low = 0;
    let high = n*m-1;

    while(low <= high){
        let guess = Math.floor((low+high)/2);
        let row = Math.floor(guess/m);
        let col = guess%m;

        if(matrix[row][col] === target){
            return true;
        }

        else if(matrix[row][col] < target)
        low = guess + 1;

        else{
            high = guess -1;
        }
    }
    return false;
    
};