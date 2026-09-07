/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraysDivByK = function(nums, k) {
    let res = 0;
    let sum = 0;
    let map = new Map();
    map.set(0, 1);
    for(let i = 0; i<nums.length; i++){
        sum += nums[i];
        let rem = sum%k;
        if(rem<0) 
        rem += k;
        let freq = map.get(rem) || 0;
        res += freq;
        map.set(rem, freq+1);

    }
    return res;
    
};