/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let reachable = nums[0];
    for(let i = 0; i<nums.length; i++){
        if(reachable<i)
        return false;
        else{
            reachable = Math.max(reachable, nums[i] + i);
        }
        
    }
    return true;
};