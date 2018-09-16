var combinationSum2 = function(candidates, target) {
    let nums = {};
    candidates.forEach((candidate)=>{
        nums[candidate] = nums[candidate]||0;
        nums[candidate]++;
    })
    let q=[{arr:[], sum:0}];
    let res = [];
    for(let n in nums){
        let cnt = nums[n];
        let c=parseInt(n);
        let suffix = [];
        let levelNum = q.length;
        for(let j=1;j<=cnt;j++){
            suffix.push(c);
            for(let i=0;i<levelNum;i++){
                let curr = q[i];
                if(curr.sum+c*j<target){
                    q.push({arr:curr.arr.concat(suffix),sum:curr.sum+c*j});
                }else if(curr.sum+c*j===target){
                    res.push(curr.arr.concat(suffix));
                }
            }
        }
    }
    
    return res;
};
