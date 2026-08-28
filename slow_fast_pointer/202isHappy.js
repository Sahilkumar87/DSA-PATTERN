/**
 * @param {number} n
 * @return {boolean}
 */

const fun = (n) => {
    let sum = 0;
    while(n > 0){
        let digit = n%10;
        n = Math.floor(n/10);
        sum = sum + (digit * digit);
    }
    return sum;
}




var isHappy = function(n) {
    let slow = n;
    let fast = n;

    while(fast != 1){
        slow = fun(slow)
        fast = fun(fast);
        fast = fun(fast);

        if(slow == fast && slow != 1){
            return false;
        }
    }
    return true;
};