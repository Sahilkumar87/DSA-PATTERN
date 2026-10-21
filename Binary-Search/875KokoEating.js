/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */

const fun = (a, speed) => {
    let h = 0;
    for(let i = 0; i<a.length; i++){
        h = h + Math.floor(a[i]/speed);
        if(a[i]%speed != 0)
        h++;
    }
    return h;
}

var minEatingSpeed = function(piles, h) {
    let low = 1;
    let high = Math.max(...piles);
    let res = -1;

    while(low <= high){
        let mid = Math.floor((low + high)/2);
        let hr = fun(piles, mid);

        if(hr > h){
        low = mid+1;
        }
        else{
            res = mid;
            high = mid -1;
        }
        
    }
    return res;
    
};