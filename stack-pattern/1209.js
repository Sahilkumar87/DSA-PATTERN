/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var removeDuplicates = function(s, k) {
    let st = [];

    for (let i = 0; i < s.length; i++) {
        let c = s[i];

        if (st.length > 0 && st[st.length - 1][0] === c) {
            st[st.length - 1][1]++;
        } else {
            st.push([c, 1]);
        }

        if (st[st.length - 1][1] === k) {
            st.pop();
        }
    }

    let res = "";

    for (let i = 0; i < st.length; i++) {
        res += st[i][0].repeat(st[i][1]);
    }

    return res;
};