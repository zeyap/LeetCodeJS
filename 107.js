//BFS

var levelOrderBottom = function(root) {
    if(root===null)return [];
    let stk=[root];
    let res=[];
    let curr = root;
    while(stk.length>0){
        res.unshift(stk.map((item)=>item.val));
        let levelNum = stk.length;
        for(let i=0;i<levelNum;i++){
            curr = stk.shift();
            if(curr.left!==null)stk.push(curr.left);
            if(curr.right!==null)stk.push(curr.right); 
        }
    }
    return res;
};

//DFS

var levelOrderBottom = function(root) {
    if(root===null)return [];
    let res=[];
    DFS(root,0,res);
    return res.reverse();
};

var DFS = function(root,level,res){
    if(root===null)return;
    res[level]=res[level]||[];
    res[level].push(root.val);
    DFS(root.left,level+1,res);
    DFS(root.right,level+1,res);
    return;
}