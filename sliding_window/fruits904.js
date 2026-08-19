/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function(fruits) {
    
        let low = 0;
        let res = -1;
        let n = fruits.length;
        let f = new Map();
        
        for (let high = 0; high < n; high++) {
            // 1. Character add karna (Aapka sahi kiya hua part)
            f.set(fruits[high], (f.get(fruits[high]) || 0) + 1);
            
            // 2. Agar unique characters 'k' se zyada ho gaye, toh window chhoti karo
            while (f.size > 2) {
                let count = f.get(fruits[low]);
                
                // Sahi tarika: count check karke delete ya decrement karna
                if (count === 1){
                    f.delete(fruits[low]);
                }
                else {
                f.set(fruits[low], count - 1);
            }
               
                low++;
             
            
        }
           res = Math.max(res, high - low + 1);
           
        
    
    
}

return res; // Loop khatam hone ke baad return karo
};