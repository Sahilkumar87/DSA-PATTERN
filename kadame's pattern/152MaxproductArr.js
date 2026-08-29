/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let minend = nums[0];
    let maxend = nums[0];
    let res = nums[0];

    for(let i = 1; i<nums.length; i++){
        let v1 = nums[i];
        let v2 = minend * nums[i];
        let v3 = maxend * nums[i];

        maxend = Math.max(v1, Math.max(v2, v3));
        minend = Math.min(v1, Math.min(v2, v3));
        res = Math.max(res, maxend);
    }
    return res;

    
};