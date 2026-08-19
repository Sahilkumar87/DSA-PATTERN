/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let low = 0; 
    let high = 0;
    let res = Number.MAX_VALUE;
    let sum = 0;

    while(high< nums.length){
        sum += nums[high];
        while(sum >= target){
            let length = high - low + 1;
            res = Math.min(res, length);
            sum -= nums[low];
            low++;
        }
        high++;
    }
    return res === Number.MAX_VALUE ? 0 : res;
    
};