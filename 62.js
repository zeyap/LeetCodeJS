//dynamic programming dp

var uniquePaths = function(m, n) {
    //m-1 right & n-1 down
    let P=[];
    for(let i=0;i<=m-1;i++){
        if(P[i]===undefined)P[i]=[];
        P[i][0]=1;
    }
    for(let j=0;j<=n-1;j++){
        P[0][j]=1;
    }
    for(let i=1;i<=m-1;i++){
        for(let j=1;j<=n-1;j++){
            P[i][j]=P[i-1][j]+P[i][j-1];
        }
    }
    return P[m-1][n-1];
};

