/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {
    let n = nums.length;
    let res = new Array(n).fill(-1); // Default -1 rakho
    let st = [];
    
    // Circular array ke liye Right-to-Left loop (2n-1 se 0 tak)
    for(let i = 2 * n - 1; i >= 0; i--){
        let curr = nums[i % n]; // Circular index ke liye % n
        
        // 1. Stack se chote ya barabar elements ko pop karo
        while(st.length > 0 && st[st.length - 1] <= curr){
            st.pop();
        }
        
        // 2. Answer assign karo (Sirf pehle n elements ke liye, i.e., i < n)
        if(i < n) {
            res[i] = st.length > 0 ? st[st.length - 1] : -1;
        }
        
        // 3. Current element ko push karo (Yeh while loop ke BAHAR hoga)
        st.push(curr);
    }
    
    return res;
};