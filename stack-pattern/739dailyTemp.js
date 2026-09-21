/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    let n = temperatures.length;
    let st = []
    let res = new Array(n);
    res[n-1] = 0;
    st.push(n-1);
    for(let i = n-2; i>=0; i--){
        while(st.length != 0 && temperatures[st[st.length-1]] <= temperatures[i])
        st.pop();
        if(st.length === 0)
        res [i] = 0;
        else 
        res[i] = st[st.length-1]-i;
        st.push(i)
    }
    return res;
    
};