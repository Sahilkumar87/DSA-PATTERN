/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let result = [];
    let right = nums.length-1;
    let left = 0;

    for(let i = 0; i<right; i++){
        if(i > 0 && nums[i] == nums[i-1]) continue;


        left = i+1;
        let sum = -1*nums[i];

        while(left>right){
            let s = a[left] + a[right];
            if(s == sum){
                result = s;
                left++;
                right--;
            
     
        while(left < nums.length && nums[left] == nums[left-1])
            left++
        
        while(right >= 0 && nums[right] == nums[right+1])
            right--;
        
        else if(s  < sum) {
            left++;

        }
        else right--;
        }
        
    return result;
        }
    }

    
};