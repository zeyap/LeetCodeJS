// Recursive approach

var inorderTraversal = function(root) {
    let res = [];
    if(root===null)return res;
    let inorder=function(root){
        if(root.left!==null){
            inorder(root.left);
        }
        res.push(root.val);
        if(root.right!==null){
            inorder(root.right);
        }
    }
    inorder(root);
    return res;
};

// Iterate using stack
// Backtracking

var inorderTraversal = function(root) {
    let res=[];
    let stk=[];
    let curr=root;
    while(curr!==null||stk.length>0){
        if(curr!==null){
            stk.push(curr);
            curr = curr.left;
        }else{
            curr = stk.pop();
	 res.push(curr.val);
            curr = curr.right;
        }
    }
    return res;
};

// Morris traversal

var inorderTraversal = function(root) {
    let res = [];
    let curr = root;
    while(curr!==null){
        if(curr.left===null){
            res.push(curr.val);
            curr = curr.right;
        }else{
            //save left root
            let lroot = curr.left;
            //find rightmost
            let rmost = lroot;
            while(rmost.right){
                rmost = rmost.right;
            }
            rmost.right=curr;
            curr.left=null;
            curr = lroot;
        }
    }
    
    return res;
};