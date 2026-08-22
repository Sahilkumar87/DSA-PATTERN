/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */


var sahi = (have, need) => {
    for(let i = 0; i<256; i++){
        if(have[i]<need[i]){
            return false;
        }
    }
    return true;
}


var minWindow = function(s, t) {
    let n = s.length;
    let m = t.length;
    
    let have = new Array(256).fill(0);
    let need = new Array(256).fill(0);

    if(n<m){
        return "";
    }

    for(let i = 0; i<m; i++){
        need[t[i].charCodeAt(0)]++;
    }

    let low = 0; 
    let high = 0;
    let res = Number.MAX_VALUE;
    let start = -1;
    for(high = 0; high<n; high++){ // jab tak sahi hai
        have[s[high].charCodeAt(0)]++;
        while(sahi(have, need)){
            let len = high - low + 1;
            if(res>len){
                res = len;
                start = low;
            }
            have[s[low].charCodeAt(0)]--;
            low++;
        }

    }
    if(res === Number.MAX_VALUE){
        return "";
    }
    return s.slice(start, start+res);
    
};
