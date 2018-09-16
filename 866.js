var subtreeWithAllDeepest = function(root) {
    let stk=[{node:root, p: null}];
    let lmost, rmost;
    while(stk.length>0){
        let levelNum = stk.length;
        for(let i=0;i<levelNum;i++){
            let curr = stk.shift();
            if(i===0)lmost = curr;
            if(i===levelNum-1)rmost = curr;
            if(curr.node.left){stk.push({node:curr.node.left,p:curr});}
            if(curr.node.right){stk.push({node:curr.node.right,p:curr});}
        }
    }
    //lca
    if(lmost.node===rmost.node)return lmost.node;
    let lparent = lmost.p, rparent = rmost.p;
    while(lparent!==rparent){
        lparent = lparent.p;
        rparent = rparent.p;
    }
    return lparent.node;
};
