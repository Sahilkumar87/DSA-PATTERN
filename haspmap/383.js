/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */

const fun = (have, need) => {
for (const [c, fneed] of need) {

    // ⚠️ IMPORTANT: JS mein agar 'c' 'have' mein nahi hai, toh have[c] undefined aayega.
    // Isliye || 0 lagana zaroori hai.
    const fhave = have.get(c) || 0; 
    
    if (fhave < fneed) {
        return false;
    }
}
return true;
}

var canConstruct = function(ransomNote, magazine) {
    let n = ransomNote.length;
    let m = magazine.length;

    let need = new Map();
    let have = new Map();

    for(let i = 0; i<n; i++)
    need.set(ransomNote[i], (need.get(ransomNote[i]) || 0 ) + 1);
    for(let i = 0; i<m; i++)
    have.set(magazine[i], (have.get(magazine[i]) || 0) + 1);
    

    return fun(have, need);
};