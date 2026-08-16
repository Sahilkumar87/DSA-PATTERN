/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let low = 0;
    let high = nums.length-1;
    let mid = 0;

    while(mid <= high){
        if(nums[mid] == 0){
            swap(nums, mid, low);
            low++;
            mid++;

        }
        else if(nums[mid] == 2){
            swap(nums, mid, high);
            high--;

        }
        else{
            mid++;
        }
    }


     const swap = (nums, i, j) => {
        let temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
    }
    
};