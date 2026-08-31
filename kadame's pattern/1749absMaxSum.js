//maximum-absolute-sum-of-any-subarray

/**
 * @param {number[]} nums
 * @return {number}
 */



 const minsum = (nums) => {
    let minsum = nums[0];
    let ans = nums[0];

    for(let i = 1; i<nums.length; i++){
        let v1 = minsum + nums[i];
        let v2 = nums[i];
        minsum = Math.min(v1, v2);
        ans = Math.min(ans, minsum);
    }

    return ans;

 };


 const maxsum = (nums) => { 
    let maxsum = nums[0];
    let ans = nums[0];

    for(let i = 1; i<nums.length; i++){
        let v1 = maxsum + nums[i];
        let v2 = nums[i];
        maxsum = Math.max(v1, v2);
        ans = Math.max(ans, maxsum);
    }

    return ans;

 };




var maxAbsoluteSum = function(nums) {
    let minSum = minsum(nums);
    let maxSum = maxsum(nums);
    let res;

    let x = Math.abs(minSum);
    let y = Math.abs(maxSum);

    res = Math.max(x, y);

    return res;
  
};



