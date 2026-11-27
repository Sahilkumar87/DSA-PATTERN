/**
 * @param {number} n
 * @return {number}
 */

class Solution {
    sumOfDigits(n) {
        // code here
     function check(n){
         if(n==0)
         return 0;
         let d = n%10;
         n = Math.floor(n/10);
         let ans = check(n);
         return d + ans;
     }
      return check(n);
    }
}