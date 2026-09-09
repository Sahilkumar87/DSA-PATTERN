/**
 * @param {number} n
 * @return {number}
 */
var countCommas = function(n) {
    // 1. Negative number ko positive bana lo (e.g., -1000 -> 1000)
    let absNum = Math.abs(n);
    
    // 2. Number ko string mein badal kar uski length nikal lo
    let length = absNum.toString().length;
    
    // 3. Formula: Har 3 digits ke baad 1 comma lagta hai
    // Example: length 4 (1000) -> (4-1)/3 = 1 comma
    // Example: length 7 (1000000) -> (7-1)/3 = 2 commas
    return Math.floor((length - 1) / 3);
};

// --- TEST CASES (Khud check kar ke dekhein) ---
console.log(countCommas(999));          // Output: 0
console.log(countCommas(1000));         // Output: 1
console.log(countCommas(999999));       // Output: 1
console.log(countCommas(1000000));      // Output: 2
console.log(countCommas(-123456789));   // Output: 2