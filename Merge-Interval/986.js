/**
 * @param {number[][]} firstList
 * @param {number[][]} secondList
 * @return {number[][]}
 */
var intervalIntersection = function(firstList, secondList) {
    let a = firstList;
    let b = secondList;
    let ans = [];
    let i = 0;
    let j = 0;
    let n = firstList.length;
    let m = secondList.length;

    while(i<n && j<m){
        let st1 = a[i][0];
        let end1 = a[i][1];
        let st2 = b[j][0];
        let end2 = b[j][1];
        if(st1 <= st2){
            if(end1 >= st2){
                let s = Math.max(st1, st2);
                let e = Math.min(end1, end2);
                ans.push([s, e]);
            }
        }
        else{
            if(end2 >= st1){
                let s = Math.max(st1, st2);
                let e = Math.min(end1, end2);
                ans.push([s, e]);
            }
        }
        if(end1 <= end2) i++;
        else j++;

    }
    return ans;
    
};