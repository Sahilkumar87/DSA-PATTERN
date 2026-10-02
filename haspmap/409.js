/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    let n = s.length;
    let f = new Map();
    for(let i = 0; i<n; i++)
    f.set(s[i], (f.get(s[i]) || 0) + 1);
    let odd = false;
    let res = 0;
    for(let [key, val] of f){
        if(val %2 === 0){      
        res += val;
        }
      else{
            odd = true;
        }
    }

    if(odd == false){
        return res;
    }
   

   for(let [key, val] of f){
    if(val %2 == 1)
    res += val -1;
   }

    return res + 1;

    
};