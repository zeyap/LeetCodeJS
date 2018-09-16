var addTwoNumbers = function(l1, l2) {
    let res = [];
    let carry = 0;
    while(l1||l2){
        let t;
        if(l1&&l2){
            t= l1.val+l2.val;
        }else if(l1){
            t = l1.val;
        }else{
            t= l2.val;
        }
        res.push((t+carry)%10);
        carry = t+carry>=10?1:0;
        if(l1)l1 = l1.next;
        if(l2)l2 = l2.next;
    }
    if(carry>0){
        res.push(carry);
    }
    let resNode = new ListNode(res.shift());
    let curr=resNode;
    for(let i=0;i<res.length;i++){
        curr.next = new ListNode(res[i]);
        curr = curr.next;
    }
    return resNode;
};
