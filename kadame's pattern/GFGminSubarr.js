/**
 * @param {number[]} arr
 * @returns {number}
 */

class Solution {
    minSubarraySum(arr) {
        // code here
        let i = 0; 
        let bestend = arr[0];
        let ans = arr[0];
        
        for(let i = 1; i<arr.length; i++){
            let v1 = bestend + arr[i];
            let v2 = arr[i];
            
            bestend = Math.min(v1, v2);
            ans = Math.min(ans, bestend);
        }
        return ans;
    }
}