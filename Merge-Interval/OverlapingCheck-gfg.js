class Solution {
    isIntersect(intervals) {
        // Code Here
        let n = intervals.length;
        intervals.sort((a, b) => a[0]-b[0]);
        let s1 = intervals[0][0];
        let end1 = intervals[0][1];
        
        for(let i = 0; i<n; i++){
            let s2 = intervals[i][0]
            let end2 = intervals[i][1];
            
            if(end1 >= end2){
                return true;
            }
            st1 = st1;
            end1 = Math.max(end1, end2);
            
        }
        return false;
        
    }
    
}