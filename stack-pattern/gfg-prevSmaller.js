/**
 * @param {number[]} arr
 * @returns {number[]}
 */

class Solution {
    prevSmaller(arr) {
        // code here
        
        // code here
                    let n = arr.length;
                    let res = new Array(n);
                    let st = [];

                    res[0] = -1;
                    st.push(arr[0]);

                    for (let i = 1; i<=n-1; i++) {

                        while (st.length != 0 && st[st.length - 1] >= arr[i]) {
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