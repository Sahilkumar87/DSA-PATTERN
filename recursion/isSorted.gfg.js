class Solution {
    isSorted(arr) {
        // code here
        function check(i, n){
            if(i==n || i==n-1)
            return true;
            if(arr[i] > arr[i+1])
            return false;
            let ans = check(i+1, n);
            return ans;
        }
        return check(0, arr.length);
    }
}