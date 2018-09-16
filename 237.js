var deleteNode = function(node) {
    let curr = node;
    while(curr.next!==null){
        curr.val = curr.next.val;
        if(curr.next.next===null){
            curr.next=null;
            break;
        }
        curr = curr.next;
    }
};