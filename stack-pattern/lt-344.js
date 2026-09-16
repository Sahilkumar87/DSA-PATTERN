/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    // let stack = new Stack();
    // for(let i = 0; i<s.length; i++){
    //     stack.push(s[i]);
    // }
    // let reverseStr = "";
    // while(!stack.isEmpty()){
    //     reverseStr += stack.pop();
     
    // }
    // return reverseStr;
    

    let left = 0;
    let right = s.length -1;
    while(left<right){
       [s[left], s[right]] = [s[right], s[left]];
        // s[left] = s[left] ^ s[right];
        // s[right] = s[left] ^ s[right];
        // s[left] = s[left] ^ s[right];
        left++;
        right--;
    
    }
   

};