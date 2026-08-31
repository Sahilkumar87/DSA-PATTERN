//subarray-sum-with-one-deletion

/**
 * @param {number[]} arr
 * @return {number}
 */
var maximumSum = function(arr) {
    let res = arr[0]
    let oneDelete = arr[0];
    let noDelete = arr[0];
   

    for(let i = 1; i<arr.length; i++){
        let prevNoDelete = noDelete;
        let prevOneDelete = oneDelete;
        noDelete = Math.max(noDelete + arr[i], arr[i])
        if((prevOneDelete === Number.MAX_VALUE))
        v2 = arr[i];
        else 
        v2 = prevOneDelete + arr[i];
        oneDelete = Math.max(v2, prevNoDelete);
        res = Math.max(res, Math.max(oneDelete, noDelete));
    }
    return res;
};