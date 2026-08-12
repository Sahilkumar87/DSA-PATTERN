/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if(nums.length == 0) return 0;
    let officier = 0;
    let res = 1;
    let cm = 1;
    while(cm < nums.length){
        if(nums[cm] == nums[cm-1]){
            cm++;
            continue;
        }
        else{
            nums[officier+1] = nums[cm];
            officier++;
            res++;
            cm++;
        }
    }
    return res;
    
    
};