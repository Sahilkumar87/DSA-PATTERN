/**
 * @param {string} s
 * @return {boolean}
 */
class Solution {
    isPalindrome(s, low, high) {
        // code here
        // let len = high - low + 1;
        function check(low, high){
        if(low >= high) return true;
        if(s[low] != s[high]) return false;
        
        return check(low+1, high-1);
            
        }
        
        return check(0, s.length-1);
    }
}
