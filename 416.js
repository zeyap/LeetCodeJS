var canPartition = function(nums) {
    let total = nums.reduce((accum,num)=>accum+num,0);
    if(total%2===1)return false;
    let half = total/2;
    let rest = half;
    let dp = [];

    dp[0]=[];
    for(let sum=0;sum<=half;sum++){
        dp[0][sum] = (nums[0]===sum||sum===0)?true:false;
    }
    for(let i=1;i<nums.length;i++){
        dp[i] = [];
        for(let j=0;j<=half;j++){
            if(j>=nums[i])dp[i][j] = dp[i-1][j]||dp[i-1][j-nums[i]];
            else dp[i][j] = dp[i-1][j];
        }
    }
    return dp[nums.length-1][half];
};
