Backtracking

var combinationSum = function(candidates, target) {
    var res = [];
    let backtrack = (tempList, start, remain)=>{
        if(remain===0){res.push([...tempList]);} //tempList是传引用的
        if(remain<0)return;
        for(let i=start;i<candidates.length;i++){
            tempList.push(candidates[i]);
            backtrack(tempList, i, remain-candidates[i]);
            tempList.pop();
        }
    }
    backtrack([],0,target);
    return res;
};
