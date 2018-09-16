var levelOrder = function(root) {
    let res=[];
    if(root===null)return res;
    let stk=[{node:root, d:0}];
    while(stk.length>0){
        let curr = stk.shift();
        res[curr.d] = res[curr.d]||[];
        res[curr.d].push(curr.node.val);
        if(curr.node.left!==null){
            stk.push({node:curr.node.left,d:curr.d+1});
        }
        if(curr.node.right!==null){
            stk.push({node:curr.node.right,d:curr.d+1});
        }
    }
    return res;
};
