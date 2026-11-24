const fun = (a, n) => {
    if(n == 1) return a[0]; // base case

    let last = a[n-1];
    let ans = fun(n-1);
    return Math.max(last, ans);

}