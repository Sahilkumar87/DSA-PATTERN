/**
 * @param {number[]} arr
 * @param {number} k
 * @returns {number}
 */

class Solution {
    
    fun(stalls, n, k, guess){
        let cow = 1;
        let pos = stalls[0];
        
        for(let i = 1; i<stalls.length; i++){
            let dist = stalls[i]- pos;
            if(dist < guess)
            continue;
            cow++;
            pos = stalls[i]
        }
        if(cow >= k)
        return true;
        
        else{
            return false;
        }
    }
    
    
    
    aggressiveCows(arr, k) {
        // code here
        
        let n = arr.length;
        arr.sort((a, b) => a-b);
        let low = 1; 
        let high = arr[n-1] - arr[0];
        
        let res = -1;
        while(low <= high){
            let mid = Math.floor((low + high)/2);
            let sh = this.fun(arr, n, k, mid);
            if(sh){
                res = mid;
                low = mid + 1;
            }
            else{
                high = mid -1;
            }
        }
        return res;
        
    }
}