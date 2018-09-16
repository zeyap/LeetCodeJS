var widthOfBinaryTree = function(root) {
    if(!root) return 0;
    let q = [{node:root,id:0}];
    let w = 0;
    while(q.length>0){
        let levelNum = q.length;
        w = Math.max(q[q.length-1].id-q[0].id+1,w);
        let minid = q[0].id; //if not reduced by minimum id every level, id can be Infinity, resulting in NaN answer
        for(let i=0;i<levelNum;i++){
            let curr = q.shift();
            if(curr.node.left!==null)q.push({node:curr.node.left,id:curr.id*2-minid});
            if(curr.node.right!==null)q.push({node:curr.node.right,id:curr.id*2+1-minid});
        }
    }
    return w;
};
