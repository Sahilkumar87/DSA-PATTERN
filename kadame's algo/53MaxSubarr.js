/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let i = 0;
    let bestend = nums[0];
    let ans = nums[0];

    for(let i = 1; i<nums.length; i++){
        let v1 = bestend + nums[i];
        let v2 = nums[i];

        bestend = Math.max(v1, v2);
        ans = Math.max(ans, bestend);
    }
    return ans;
    
};