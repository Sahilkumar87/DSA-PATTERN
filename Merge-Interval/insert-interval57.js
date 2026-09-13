/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    let res = [];
    let i = 0;
    let n = intervals.length;

    // Step 1: Wo saare intervals add karo jo newInterval se pehle aate hain (No overlap)
    while (i < n && intervals[i][1] < newInterval[0]) {
        res.push(intervals[i]);
        i++;
    }

    // Step 2: Wo saare intervals merge karo jo overlap karte hain
    while (i < n && intervals[i][0] <= newInterval[1]) {
        newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
        newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
        i++;
    }
    // Merge hone ke baad, final newInterval ko result mein daal do
    res.push(newInterval);

    // Step 3: Baaki bache hue intervals (jo newInterval ke baad aate hain) add kar do
    while (i < n) {
        res.push(intervals[i]);
        i++;
    }

    return res;
};