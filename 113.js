var pathSum = function(root, sum) {
    let paths=[];
    if(root!==null){
        dfs(root,sum-root.val,[root.val],paths);
    }
    return paths;
};

var dfs = function(root,remain,currpath,paths){
    let pathl, pathr;
    if(root.left!==null){
        pathl=[...currpath,root.left.val];
        dfs(root.left,remain-root.left.val,pathl,paths);
    }
    if(root.right!==null){
        pathr = [...currpath,root.right.val]
        dfs(root.right,remain-root.right.val,pathr,paths);
    }
    if(root.left===null && root.right===null&& remain===0){
        paths.push(currpath);
    }
};