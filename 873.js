var lenLongestFibSubseq = function(A) {
    let memo = [];
    let map = {};
    for(let i=0;i<A.length;i++){
        map[A[i]]=i;
    }
    let ans = 0;
    for(let i=0;i<A.length;i++){
        memo[i] = memo[i]||[];
        for(let j=i+1;j<A.length;j++){
            if(memo[i][j]===undefined){
                longestFibSubseq(i,j,A,map,memo);
            }
            ans = Math.max(memo[i][j],ans)
        }
    }
    return ans>2?ans:0;
};

var longestFibSubseq = function(n,m,A,map,memo){
    memo[n] = memo[n]||[];
    if(memo[n][m])return memo[n][m];
    return memo[n][m] = map[A[n]+A[m]]!==undefined? 1+longestFibSubseq(m,map[A[n]+A[m]],A,map,memo):2;
}
