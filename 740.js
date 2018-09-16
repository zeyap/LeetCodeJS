/*
DP: where the next use/avoid choice depends on whether the last element was used
 */
var deleteAndEarn = function(nums) {
    let cnt = {};
    let list = [];
    for(let i=0;i<nums.length;i++){
        if(!cnt[nums[i]]){
            cnt[nums[i]]=0;
        }
        cnt[nums[i]]+=nums[i];
    }
    for(let num in cnt){
        list.push({n:parseInt(num),s:cnt[num]});
    }
    list.sort((a,b)=>{return a.n-b.n;});
    let maxSum = 0;
    let use=0,avoid=0;
    for(let i=0;i<list.length;i++){
        if(i===0||list[i].n!==list[i-1].n+1){//last element is not adjacent
            use = list[i].s+maxSum;
            avoid = maxSum;
        }else{ //adjacent
            use = list[i].s+avoid;
            avoid = maxSum;
        }
        
        maxSum = Math.max(use,avoid)
    }
    return maxSum;
};
