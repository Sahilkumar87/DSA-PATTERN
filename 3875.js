/**
 * @param {number[]} nums1
 * @return {boolean}
 */
var uniformArray = function(nums1) {
    let min = Number.MIN_VALUE;
    nums1.forEach((nums) => {
        min = Math.min(min, nums);
    })
    if(min%2 != 0)
    return true;
    nums1.forEach((nums) => {
        if(nums%2 != 0)
        return false
    })
    return true;
    
};