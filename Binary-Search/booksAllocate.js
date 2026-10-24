/**
 * @param {number[]} arr
 * @param {number} k
 * @returns {number}
 */

class Solution {
    
    fun(books, limit, stud){
        let k = 1;
        let page = 0;
        for(let i = 0; i<books.length; i++){
            if(page + books[i] <= limit){
                page += books[i];
            }
            
            else{
                k++;
                page = books[i];
                if(k > stud)
                return false;
            }
        }
        
        return true;
    }
    
    
    
    findPages(arr, k) {
        // code here
        let n = arr.length;
        if(n<k)
        return -1;
        
        let low = 0;
        let high = 0;
        
        for(let i = 0; i<n; i++){
            low = Math.max(low, arr[i]);
            high +=  arr[i];
        }
        
        let res = -1;
        
        while(low <= high){
            let guss = Math.floor((low+high)/2);
            let sn = this.fun(arr, guss, k);
            if(sn){
                res = guss;
                high = guss - 1;
            }
            else{
                low = guss+1
            }
        }
        return res;
        
        
    }
}