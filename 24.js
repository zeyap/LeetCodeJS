var swapPairs = function(head) {
    if(head===null||head.next===null){
        return head;
    }
    let rest = swapPairs(head.next.next);
    let second = head.next;
    second.next = head;
    head.next = rest;
    return second;
};
