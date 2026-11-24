const fun = (arr, n, idx, temp) => {
    if(idx == n){
        console.log(temp);
        return;
    }
    fun(a, n, idx+1, temp);
    temp.push(a[idx]);
    fun(a, n, idx+1, temp);
    temp.pop();
    return;
}