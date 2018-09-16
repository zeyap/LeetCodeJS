//Subsequence:[1,2,3,4]=>[1,3],[1,2,4],…
//Subarray: [1,2,3,4]=>[1,2],[2,3,4],…

//Dynamic programming
var findLength = function(A, B) {
    let memo=[];//memo[i][j] largest k making A[i:i+k]==B[j:j+k]
    let ans = 0;
    for(let i=A.length-1;i>=0;i--){
        memo[i] = memo[i]||[];
        for(let j=B.length-1;j>=0;j--){
            if(A[i]===B[j]){
                if(i+1>=A.length||j+1>=B.length)
                    memo[i][j] =1;
                else
                    memo[i][j]=memo[i+1][j+1]+1;
            }else{
                memo[i][j]=0;
            }
            ans = Math.max(memo[i][j],ans);
        }
    }
    return ans
};

//Binary Search with Rolling Hash
