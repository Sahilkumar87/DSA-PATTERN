/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubarraySumCircular = function(nums) {
    let sum = nums[0];
    let a1 = nums[0];
    let a2 = nums[0];
    let bestending1 = nums[0];
    let bestending2 = nums[0];

    for(let i = 1; i<nums.length; i++){
        // sum of array
        sum = sum + nums[i];


        // max sum subarr
        bestending1 = Math.max(bestending1 + nums[i], nums[i]);
        a1 = Math.max(a1, bestending1);
        
        // min sum subarr
        bestending2 = Math.min(bestending2 + nums[i], nums[i]);
        a2 = Math.min(a2, bestending2);
    }
    if(a1<0)
    return a1;
    let maxans = sum - a2;
    return Math.max(a1, maxans);
    
};