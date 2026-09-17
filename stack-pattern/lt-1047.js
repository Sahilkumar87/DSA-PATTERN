/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function(s) {
    let n = s.length;
    let st = new Stack();
    let res = "";

    for(let i = 0; i<n; i++){
        if(st.isEmpty()){
            st.push(s[i]);
            continue;
        }
        if(st.peek() === s[i]){
            st.pop();
            continue;
        }
        st.push(s[i]);
    }
    while(!st.isEmpty()){
        let c = st.peek();
        res = c + res;
        st.pop();
    }
    return res;
    
};