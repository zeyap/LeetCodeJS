var binaryTreePaths = function(root) {
    let paths=[];
    let dfs = (path,root)=>{
        if(root===null)return [];
        path.push(root.val);
        if(root.left===null&&root.right===null)return [[...path]];
        let lpaths=[],rpaths=[];
        if(root.left) lpaths = dfs([...path],root.left);
        if(root.right) rpaths = dfs([...path],root.right);
        return lpaths.concat(rpaths);
    }
    return dfs([],root).map((array)=>{
        let str='';
        array.forEach((item,i)=>{
            if(i>0){
                str+='->'
            }
            str+=item.toString();
        })
        return str;
    });
};
