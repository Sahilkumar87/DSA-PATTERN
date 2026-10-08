/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */




const rev = (head, times) => {
    let curr = head;
    let prev = null;
    while(times--){
        let nex = curr.next;
        curr.next = prev;
        prev = curr;
        curr = nex;
    }
    return;

}
var reverseKGroup = function(head, k) {
    if(head == null)
    return head;
    
    let left = head;
    let res = null;
    let prevLeft = null;
    let right;
    let size = k; // 2 ki jagah k aaya hai , same problem h 24 jaise exact same
    while(true){
        right = left;
        for(let i = 0; i<(size - 1); i++){
            if(right == null)
            break;
            right = right.next;
        }
        if(right){
            let nextLeft = right.next;
            rev(left, size);
            if(prevLeft)
            prevLeft.next = right;
            prevLeft = left;
            if(res == null)
            res = right;
            left = nextLeft;
        }
        else{
            if(prevLeft)
                prevLeft.next = left;
                if(res === null)
                res = left;
                break;
            
        }
    }
    return res;
    
    
};