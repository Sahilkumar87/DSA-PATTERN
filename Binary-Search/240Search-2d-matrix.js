/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let n = matrix.length;
    let m = matrix[0].length;
    let row = n-1;
    let col = 0;

    while(row >= 0 && col <m){
        if(matrix[row][col]==target)
        return true;
        else if(matrix[row][col] > target)
        row--;
        else
        col++;
    }
    return false;
    
};