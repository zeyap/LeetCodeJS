var rightSideView = function(root) {
    let curr =root;
    let res ={};
    let stk=[];
    let currLayer = 0;
    let len = 0;
    while(curr||stk.length>0){
        if(curr){
            if(!res[currLayer]){res[currLayer]=curr.val;len++;}
            stk.push({node:curr,layer:currLayer});
            
            currLayer++;
            curr = curr.right;
        }else{
            let temp=stk.pop();
            curr=temp.node;
            currLayer = temp.layer;
            
            currLayer++;
            curr = curr.left;
        }
    }
    res.length=len;
    return Array.from(res);
};
