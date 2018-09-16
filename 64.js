// DP
// You can only move either down or right at any point in time.


var minPathSum = function(grid) {
    let s = [...grid];
    let m = s.length,n=s[0].length;
    s[0][0]=grid[0][0];
    for(let i=0;i<m;i++){
        for(let j=0;j<n;j++){
            if(i===0&&j===0)continue;
            if(i===0)s[i][j]=s[i][j-1]+grid[i][j];
            else if(j===0)s[i][j] = s[i-1][j]+grid[i][j];
            else s[i][j]=Math.min(s[i-1][j],s[i][j-1])+grid[i][j];
        }
    }
    return s[m-1][n-1];
};
