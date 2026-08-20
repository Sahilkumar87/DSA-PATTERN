/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */



var find = (freqMap) => {
    let maxc = 0; // Frequency kabhi negative nahi hoti, isliye 0 se start karo
    
    // Map ki saari values (frequencies) par loop lagao
    for (let count of freqMap.values()) {
        maxc = Math.max(maxc, count);
    }
    
    return maxc;
}


var characterReplacement = function(s, k) {
    let n = s.length;
    let low = 0;
    let high = 0;
    let f = new Map();
    let res = 0;
    for(high = 0; high<n; high++){
        f.set(s[high], (f.get(s[high]) || 0) + 1);
        let maxcnt = find(f);
        let len = high - low + 1;
        let diff = len - maxcnt;

        while(diff > k){
            let count = f.get(s[low]);

            if(count === 1){
                f.delete(s[low]);
            }
            else{
                 f.set(s[low], count - 1);

            }
            low++;
            maxcnt = find(f);
            len = high-low + 1;
            diff = len - maxcnt;
        }
        len = high-low+1;
        res = Math.max(res, len);

    }
    return res;
    
};

