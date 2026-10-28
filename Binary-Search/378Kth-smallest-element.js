/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */

const fun = (matrix, n, m, guess) => {
    let row = n-1;
    let col = 0;
    let count = 0;

    while(row>=0 && col<m){
        if(matrix[row][col] <= guess){
            count = count + row + 1;
            col++;
        }
        else{
            row--;
        }
    }
    return count;
}


var kthSmallest = function(matrix, k) {
    let n = matrix.length;
    let m = matrix[0].length;
    let low = matrix[0][0];
    let high = matrix[n-1][m-1];
    let res = -1;

    while(low <= high){
        let guess = Math.floor((low+high)/2);

        let ans = fun(matrix, n, m, guess);
        if(ans < k)
        low = guess+1;
        else{
            res = guess;
            high = guess-1;
        }
    }

    return res;

    
};