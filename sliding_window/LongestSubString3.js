/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let low = 0;
    let res = 0;
    let f = new Map();

    for(let high = 0; high<s.length; high++){
        
        f.set(s[high], (f.get(s[high]) || 0) + 1);
        
        let k = high - low + 1;

        while(f.size < k){
            let count = f.get(s[low]);
            if(count === 1){
                f.delete(s[low]);
            }

            else {
                f.set(s[low], count - 1);
            }
            low++;
            k = high - low + 1;
           
        }
            res = Math.max(res, high - low + 1);


    }
    return res;
    
};