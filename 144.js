// Using Stack

var preorderTraversal = function(root) {
    let res=[];
    let stk=[];
    let curr=root;
    while(curr!==null||stk.length>0){
        if(curr!==null){
            res.push(curr.val);
            stk.push(curr);
            curr = curr.left;
        }else{
            curr = stk.pop();
            curr = curr.right;
        }
    }
    return res;
};

// Morris traversal

var preorderTraversal = function(root) {
    let res=[];
    let curr=root;
    while(curr!==null){
        //if left ltree root === null, move to right root
        if(curr.left===null){
            res.push(curr.val);
            curr = curr.right;
        }else{
            //find rightmost of left tree
            let lroot = curr.left;
            let rroot = curr.right;
            let rmost = lroot;
            while(rmost.right!==null){
                rmost = rmost.right;
            }
            //root-ltree(rmost of ltree)-rtree
            curr.right = lroot;
            curr.left = null;
            rmost.right = rroot;
            if(curr.left===null){res.push(curr.val);}
            //move to ltree root
            curr = lroot;
        }
        
    }
    return res;
};

