class Solution {
    removeCharacter(s, c) {
        // code here
       function check(s, n, i, c){
           if(i == n)
           return "";
           const ans = check(s, n, i+1, c);
           if(s[i] == c)
           return ans;
           return s[i]+ans;
       }
       return check(s, s.length, 0, c);
    }
}