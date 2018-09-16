// Depth first search

var maxDepth = function(root) {
     
    var dfs = function(root){
        if(root===null)return 0;
        var leftDepth = 1+dfs(root.left);
        var rightDepth = 1+dfs(root.right);
        return leftDepth>rightDepth?leftDepth:rightDepth;
    }
    return dfs(root);
};

// Breath first search

var maxDepth = function(root) {
    if(root===null)return 0;
    var q=[];
    q.push(root);
    var depth=0;
    while(q.length!==0){
        depth++;
        var levelNum = q.length;
        for(var i=0;i<levelNum;i++){
            var currNode = q.shift();
            if(currNode.left!==null)q.push(currNode.left);
            if(currNode.right!==null)q.push(currNode.right);
        }   
    }
    return depth;
};

