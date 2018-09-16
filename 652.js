var findDuplicateSubtrees = function(root) {
    let subTreeId = 0;
    let subTree = {};
    let duplicates = [];
    
    var lookUp = function(root){
        if(root===null){
            return -1;
        }
        let code = root.val+'#'+lookUp(root.left)+'#'+lookUp(root.right);
        if(subTree[code]!==undefined){
            if(subTree[code].cnt===1){
                duplicates.push(root);
            }
            subTree[code].cnt++;
        }else{
            subTree[code] = {
                id:subTreeId,
                cnt:1
            };
            subTreeId++;
        }
        return subTree[code].id;
    };
        
    lookUp(root);
    return duplicates;
};
