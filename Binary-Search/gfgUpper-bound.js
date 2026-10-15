class Solution {
    findCeil(arr, x) {
        // code here
        let low = 0; 
        let high = arr.length - 1;
        let res = -1;
        
        while(low <= high){
            let mid = Math.floor((low+high)/2);
            
            if(arr[mid] < x)
            low = mid + 1;
            
            else {
                res = mid;
                high = mid -1;
            }
        }
        return res;
    }
}
