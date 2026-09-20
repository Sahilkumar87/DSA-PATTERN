/**
 * @param {number[]} arr
 * @returns {number[]}
 */

class Solution {
    nextLargerElement(arr) {
        // code here
               let n = arr.length;
               let res = new Array(n);
               let st = [];

               res[n - 1] = -1;
               st.push(arr[n - 1]);

               for (let i = n - 2; i >= 0; i--) {

                   while (st.length !== 0 && st[st.length - 1] <= arr[i]) {
                       st.pop();
                   }

                   if (st.length === 0) {
                       res[i] = -1;
                   } else {
                       res[i] = st[st.length - 1];
                   }

                   st.push(arr[i]);
               }

               return res;
           }
}