var longestPalindromeSubseq = function(s) {
    let dp = [];//dp[i][j]: longest palindrome subsequence in substring i,j
    
    return longestPalindromeSub(s,0,s.length-1,dp);
};

var longestPalindromeSub = function(s,i,j,dp){
    dp[i+1]=dp[i+1]||[];
    dp[i]=dp[i]||[];
    if(dp[i][j])return dp[i][j];
    if(i===j)return 1;
    if(i+1===j){if(s[i]===s[j])return 2;else return 1;}
    if(s[i]===s[j]){
        dp[i+1][j-1]= longestPalindromeSub(s,i+1,j-1,dp);
        dp[i][j] = dp[i+1][j-1]+2;
    }else{
        dp[i+1][j]= longestPalindromeSub(s,i+1,j,dp);
        dp[i][j-1]= longestPalindromeSub(s,i,j-1,dp);
        dp[i][j] = Math.max(dp[i+1][j],dp[i][j-1]);
    }
    return dp[i][j]
}
