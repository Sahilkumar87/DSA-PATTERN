/**
* @param {number[]} arr
* @param {number} k
* @return {number}
*/

class Solution {
    maxSubarraySum(arr, k) {
        // 1. Edge case handle karo
        if (k > arr.length) return 0; 

        let sum = 0;

        // 2. Sirf 'k' elements ka sum lo (i < k, i <= k nahi)
        for (let i = 0; i < k; i++) {
            sum += arr[i];
        }

        // 3. Max sum ke liye -Infinity ya pehli window ka sum use karo
        let res = sum; 

        let low = 0;
        let high = k - 1;

        while (high < arr.length) {
            res = Math.max(res, sum);
            low++;
            high++;

            // Purana element hatao
            sum -= arr[low - 1];

            // Agar array khatam ho gaya, toh break karo (naya element add karne se pehle)
            if (high === arr.length) {
                break;
            }

            // Naya element add karo
            sum += arr[high];
        }

        return res;
    }
}