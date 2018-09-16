//dp

var lengthOfLIS = function(nums) {
    if(nums.length===0)return 0;
    let dp = [];
    for(let i=0;i<nums.length;i++){
        //max of dp[0...i-1]+1
        let maxdp= 0;
        for(let j=0;j<=i-1;j++){
            if(nums[i]>nums[j]){
                maxdp=Math.max(dp[j],maxdp);
            }
        }
        dp[i] = maxdp+1;
    }
    let res = 0;
    for(let i=0;i<dp.length;i++){
        res = Math.max(dp[i],res);
    }
    return res;
};


//binary search+dp

