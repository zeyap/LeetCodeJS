var largestSumOfAverages = function(A, K) {
    let memo = [];
    largestAvgSum(A,K,memo,0);
    console.log(memo)
    return memo[0][K];
};

var largestAvgSum = function(A,K,memo,s){
    if(K===0)return 0;
    memo[s] = memo[s]||[];
    if(memo[s][K]!==undefined) return memo[s][K];
    let ans = 0;
    let currAvg = 0;
    for(let i=s;i<=A.length-K;i++){
        currAvg=(currAvg*(i-s)+A[i])/(i-s+1);
        if(K===1){//when k==1, the largest average can only be avg(A[:n])
            ans = currAvg;
        }else{
            ans = Math.max(ans,largestAvgSum(A,K-1,memo,i+1)+currAvg);
        }
    }
    memo[s][K] = ans;
    return ans;
};
