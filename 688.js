var knightProbability = function(N, K, r, c) {
    if(r>N-1||c>N-1||r<0||c<0)return 0;
    let key = r.toString()+'#'+c.toString();
    let onboardPos = {[key]:{coord:[r,c],num:1}};
    let step = 0;
    let moves = [[1,-2],[1,2],[-1,-2],[-1,2],[2,-1],[2,1],[-2,-1],[-2,1]];
    let posNum = 1;
    while(posNum>0&&step<K){
        for(let i in onboardPos){
            let pos = onboardPos[i].coord;
            let duplicate = onboardPos[i].num;
            moves.forEach((move)=>{
                let x =pos[0]+move[0],y=pos[1]+move[1];
                let key = x.toString()+'#'+y.toString();
                if(x<N&&x>=0&&y<N&&y>=0){
                    if(onboardPos[key]===undefined){
                        onboardPos[key]={coord:[x,y],num:0};
                    }
                    onboardPos[key].num+=duplicate;
                    posNum+=duplicate;
                }
            })
            delete onboardPos[i];
            posNum-=duplicate;
        }
        step++;
    }
    return posNum/Math.pow(8,K);
};

//Dynamic Programming
var knightProbability = function(N, K, r, c) {
    //dp[r][c][step]
    let dp = [];
    let moves = [[1,-2],[1,2],[-1,-2],[-1,2],[2,-1],[2,1],[-2,-1],[-2,1]];
    for(let i=0;i<N;i++){
        for(let j=0;j<N;j++){
            dp[i]=dp[i]||[];
            if(i===r&&j===c)dp[i][j]=1;
            else dp[i][j]=0;
        }
    }
    for(let step = 1;step<=K;step++){
        let dp2=[];
        for(let i=0;i<N;i++){
            dp2[i]=dp2[i]||[];
            for(let j=0;j<N;j++){
                dp2[i][j]=0;
                moves.forEach((move)=>{
                    let x = i+move[0], y= j+move[1];
                    if(x>=0&&x<N&&y>=0&&y<N){
                        dp2[i][j]+= dp[x][y]/8;
                    }
                })
            }
        }
        dp = dp2;
    }
    let ans=0;
    for(let i=0;i<N;i++){
        for(let j=0;j<N;j++){
            ans+=dp[i][j];
        }
    }
    return ans;
};
