/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    let n = intervals.length;
    intervals.sort((a, b) => a[0] - b[0]);
    let res = [];

    let st1 = intervals[0][0];
    let end1 = intervals[0][1];

    for(let i = 1; i<n; i++){
        let st2 = intervals[i][0];
        let end2 = intervals[i][1];

        if(end1 >= st2){
            // st1 = st1;
            end1 = Math.max(end1, end2);
            continue;
        }
        res.push([st1, end1]);
        st1 = st2;
        end1 = end2;

    }
    res.push([st1, end1]);
    return res;
    
};