/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let left = 0; 
    let right = numbers.length-1;

    while(left<right){
        let sum = numbers[left] + numbers[right];
        if(sum == target){
            return numbers.indexOf(left), numbers.indexOf(right);
        }
        else if(sum < target){
            left++;
        }
        else if(sum > target){
            right--;
        }
    }
    return [], [];
    
};