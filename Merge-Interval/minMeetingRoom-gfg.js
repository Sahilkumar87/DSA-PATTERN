/**
 * @param {number[]} start
 * @param {number[]} end
 * @returns {number}
 */

class Solution {
    minMeetingRooms(start, end) {
        // code here
        let n = start.length;
        start.sort((a, b) => a - b);
        end.sort((a, b ) => a - b);
        let room = 0;
        let i = 0;
        let j = 0;
        let res = 0;
        
        while(i<n && j<n){
            if(start[i] < end[j]){
                room++;
                res = Math.max(res, room);
                i++;
            }
            else{
                room--;
                j++;
            }
        }
        return res;
    }
}
