/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    let sum = 0;
    let res = 0;
    let map = new Map();
    map.set(0,1);

    for(let i = 0; i<nums.length; i++){
        sum += nums[i];
        let qes = sum - k;
        let freq = map.get(qes) || 0;
        res += freq;
        map.set(sum, (map.get(sum) || 0) + 1);
    }
    return res;
    
};



/*
javed = 70;
himanshu = 70;
vijay se lena h = 40;
mzraj = 283;








 */