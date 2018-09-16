// 2D dp

var findTargetSumWays = function(nums, S) {
    let dp = [];
    targetSumWays(nums,0,S,dp);
    // console.log(dp)
    return dp[0][S];
};

var targetSumWays = function(nums, i, S,dp){
    dp[i] = dp[i]||{};
    if(dp[i][S])return dp[i][S];
    if(i===nums.length-1){
        if(S===nums[i]||S===-nums[i]){
            dp[i][S]=1;
            if(nums[i]===0) dp[i][S]=2;
        }else dp[i][S] =0;
        
    }else{
        dp[i+1]=dp[i+1]||{};
        dp[i+1][S-nums[i]] = targetSumWays(nums,i+1,S-nums[i],dp);
        dp[i+1][S+nums[i]] = targetSumWays(nums,i+1,S+nums[i],dp);
        dp[i][S] = dp[i+1][S+nums[i]]+dp[i+1][S-nums[i]];
    }
    return dp[i][S];
}

// 1D dp

