/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function(nums) {
    let res = 0;
    let zero = 0;
    let one = 0;
    let n = nums.length;
    let map = new Map();

    for(let i = 0; i<n; i++){
        if(nums[i] === 0){
            zero++;
        }
        else {
            one++;
        }
        let diff = zero - one;
        if(diff === 0){
            res = Math.max(res, i+1);
            continue;
        }
        if(!map.has(diff)){
           map.set(diff, i);
        }
        else{
            let index = map.get(diff);
            let len = i - index;
            res = Math.max(res, len);
        }
    }
    return res;
    
};