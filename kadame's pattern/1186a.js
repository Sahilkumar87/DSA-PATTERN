/**
 * @param {number[]} arr
 * @return {number}
 */
var maximumSum = function(arr) {
    let n = arr.length;
    let power = 0;
    let noPower = arr[0];
    let res = arr[0];

    for(let i = 1; i<n; i++){
        let v1 = arr[i];
        let v2 = noPower + arr[i];
        let v3 = power + arr[i];
        let v4 = noPower;


        noPower = Math.max(v1, v2);
        power = Math.max(v3, v4);

        res = Math.max(res, noPower, power);
    }
    return res;
};