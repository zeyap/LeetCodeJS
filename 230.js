var kthSmallest = function(root, k) {
    //inorder traversal
    let stk=[];
    let nth = [];
    let curr =root;
    
    while(curr!==null||stk.length>0){
        while(curr!==null){
            stk.push(curr);
            curr = curr.left;
        }//left most
        curr = stk.pop();
        nth.push(curr.val);
        if(nth.length===k) break;
        curr=curr.right;
    }
    if(nth.length===k)return nth.pop();
    else return null;
};
