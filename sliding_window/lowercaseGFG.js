/**
 * @param {string} s
 * @param {number} k
 * @returns {number}
 */
class Solution {
    longestKSubstr(s, k) {
        // code here
        let high = 0; 
        let low = 0;
        let res = -1;
        let n = s.length;
        let f = new Map();
        
        
        for(high = 0; high<n; high++){
            // f.set(s[high])++;
            
            f.set(s[high], (f.get(s[high]) || 0) + 1);
            
            while(f.size > k){
                f.get(s[low]);
                
                if(f.get(s[low]) == 1){
                    f.delete(s[low]);
                }
                else{
                    f.set(s[low], f.get(s[low]) -1);
                }
                
                if(f.size == k){
                    let len = high - low +1;
                    res = Math.max(res, len);
                }
                
            }
           
        }
        return res;
    }
}
