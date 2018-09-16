var zigzagLevelOrder = function(root) {
    if(root===null)return [];
    let stk = [root];
    let toRight = false;
    let ans = [];
    while(stk.length>0){
        let levelNum = stk.length;
        let level = [];
        for(let i=0;i<levelNum;i++){
            let curr = stk.shift();
            level.push(curr.val);
            if(curr.left)stk.push(curr.left);
            if(curr.right)stk.push(curr.right);
        }
        if(toRight) level.reverse();
        ans.push(level);
        toRight = !toRight;
    }
    return ans;
};
