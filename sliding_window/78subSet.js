/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
     let result = [[]]; // Step 1: Khali dabbe se shuruat

    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        let newSubsets = [];

        // Purane subsets me naya number add karo
        for (let subset of result) {
            newSubsets.push([...subset, num]); 
        }

        // Naye bane hue subsets ko result me mila do
        result.push(...newSubsets);
    }

    return result;
    
};