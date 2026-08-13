/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let size = nums.length;
    let neg = [];
    let pos = [];

    for(let i = 0; i<size; i++){
        if(nums[i] >= 0){// positive ke liye
            pos.push(nums[i]);
        }
        else{ // negative ke liye
            neg.push(nums[i]);
        }
    }
    
    let n = neg.length;
    let m = pos.length;

    if(neg.length == 0){ // positive array bnega
        for(let i = 0; i<pos.length; i++){
            pos[i] *= pos[i];
        }
        return pos;
    }

    if(pos.length == 0){ // negative array bnega
        for(let i = 0; i<neg.length; i++){
            neg[i] *= neg[i];
        }
        neg.reverse();
        return neg;
    }
    
    let i = 0;
    let j = 0;
    let id = 0;
    let res = new Array(n+m);

    for(let i = 0; i<n; i++){
        neg[i] *= neg[i];
    }
     neg.reverse();
    for(let i = 0; i<m; i++){
        pos[i] *= pos[i];
    }


   // positive negative ko merege ker do
    while(i<n && j<m){
        if(neg[i] <= pos[j]){
            res[id] = neg[i];
            id++;
            i++;
        }
        else{
            res[id] = pos[j];
            id++;
            j++;
        }

    }

    while(i<n){
        res[id] = neg[i];
        id++;
        i++;
    }
    while(j<m){
        res[id] = pos[j];
        id++;
        j++;
    }
    return res;



    
};