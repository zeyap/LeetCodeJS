var isValidSerialization = function(preorder) {
    let slot = 1;
    preorder = preorder.split(',')
    for(let i=0;i<preorder.length;i++){
        if(preorder[i]!=='#'){
            slot+=1;
        }else{
            slot-=1;
            if(slot===0&&i!==preorder.length-1)return false;
        }
    }
    if(slot>0)return false;
    return true;
};
