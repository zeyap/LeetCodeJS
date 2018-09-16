var combinationSum4 = function(nums, target) {
    // when different sequences are counted as the same combinations
    // let comb = {[target]:1};
    // for(let i=0;i<nums.length;i++){
    //     let maxNum = Math.floor(target/nums[i]);
    //     let targetNum = comb.length;
    //         for(let t in comb){
    //             let cnt = comb[t];
    //             delete comb[t];
    //             for(let j=0;j<=maxNum;j++){
    //                 let rest = parseInt(t)-j*nums[i];
    //                 if(rest<0)break;
    //                 comb[rest]=comb[rest]||0;
    //                 comb[rest]+=cnt;
    //             }
    //         }
    // }
    // return comb[0];
    
    let memo = [1];
    return helper(nums,target,memo);
    
};

var helper = function(nums,target,memo){
    if(memo[target]!==undefined)return memo[target];
    let ans = 0;
    for(let i=0;i<nums.length;i++){
        if(target-nums[i]<0)continue;
        helper(nums,target-nums[i],memo);
        ans+=memo[target-nums[i]];
    }
    memo[target] = ans;
    return memo[target]
}
