var climbStairs = function(n) {
    let wayNum = [];
    wayNum[0]=1;
    wayNum[1]=1;
    for(let i=2;i<=n;i++){
        wayNum[i] = wayNum[i-1]+wayNum[i-2];
    }
    return wayNum[n];
};
