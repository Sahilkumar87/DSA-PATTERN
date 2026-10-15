/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */


const first = (nums, target) => {
    let low = 0;
    let high = nums.length-1;
    let res = -1;

    while(low <= high){
        let mid = Math.floor((low+high)/2);
        if(nums[mid] < target)
        low = mid + 1;
        else if(nums[mid] > target)
        high = mid -1;

        else {
            res = mid;
            high = mid -1;
        }
    }
    return res;

}

const last = (nums, target) => {
    let low = 0;
    let high = nums.length-1;
    let res = -1;

    while(low <= high){
        let mid = Math.floor((low+high)/2);
        if(nums[mid] < target)
        low = mid + 1;
        else if(nums[mid] > target)
        high = mid -1;

        else {
            res = mid;
            low = mid + 1;
        }
    }
    return res;

}
var searchRange = function(nums, target) {
    const start = first(nums, target);
    const end = last(nums, target);

    if(start === -1) 
    return [-1, -1]

    return [start, end];



    
};