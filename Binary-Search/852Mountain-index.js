/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function(arr) {
    let n = arr.length;
    let low = 0;
    let high = n-1;
    let res = -1;
    while(low <= high){
        let mid = Math.floor((low+high)/2);
        if(arr[mid] < arr[mid+1])
        low = mid + 1;
        else{
            res = mid;
            high = mid - 1;
        }
    }
    return res;
    
};