var orderOfLargestPlusSign = function(N, mines) {
    let deads = [];
    mines.forEach((mine)=>{
        deads[mine[0]*N+mine[1]]=1;
    })
    let dp=[];
    //horizontal
    for(let r=0;r<N;r++){
        let count = 0;
        for(let c=0;c<N;c++){
            dp[r] = dp[r]||[];
            count = deads[r*N+c]?0:count+1;
            dp[r][c] = count;
        }
        count = 0;
        for(let c=N-1;c>=0;c--){
            count = deads[r*N+c]?0:count+1;
            dp[r][c] = Math.min(dp[r][c],count);
        }
    }
    //vertical
    for(let c=0;c<N;c++){
        let count = 0;
        for(let r=0;r<N;r++){
            count = deads[r*N+c]?0:count+1;
            dp[r][c] = Math.min(dp[r][c],count);
        }
        count = 0;
        for(let r=N-1;r>=0;r--){
            count = deads[r*N+c]?0:count+1;
            dp[r][c] = Math.min(dp[r][c],count);
        }
    }
    
    let maxCount = 0;
    for(let r=0;r<N;r++){
        for(let c=0;c<N;c++){
            maxCount = Math.max(dp[r][c],maxCount);
        }
    }
    return maxCount;
};
