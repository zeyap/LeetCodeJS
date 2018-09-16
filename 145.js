var postorderTraversal = function(root) {
    let res=[];
    if(root===null)return res;
    let stk=[];
    let curr = root;
    while(curr!==null||stk.length>0){
        if(curr!==null){
            stk.push(curr);
            res.unshift(curr.val);
            curr = curr.right;
        }else{
            curr = stk.pop();
            curr = curr.left;
        }
    }
    return res;
};
