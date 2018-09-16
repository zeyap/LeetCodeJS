var longestPalindrome = function(s) {
    // s="babadada"
    let isPalindrome = [];
    let maxLen = 0, l, r;
    for(let i=0;i<s.length;i++){
        for(let j=s.length-1;j>=i;j--){
            isPalindrome[i]=isPalindrome[i]||[];
            if(isPalindrome[i][j]===undefined){
                helper(s,i,j,isPalindrome);
            }
            if(isPalindrome[i][j]){
                maxLen = Math.max(maxLen, j-i+1);
                if(maxLen===j-i+1){
                    l = i;r = j;
                }
            }
        }
    }
    
    // console.log(maxLen,l,r)
    return s.slice(l, r+1);
};

var helper = function(s,start,end,isPalindrome){
    if(start>end)return false;
    isPalindrome[start] = isPalindrome[start]||[];
    if(isPalindrome[start][end]!==undefined)return isPalindrome[start][end];
    if(s[start]===s[end]){
        if(start===end||start+1===end){
            isPalindrome[start][end]=true;
        }else{
            isPalindrome[start][end] = helper(s,start+1,end-1,isPalindrome);
        }
    }else{
        isPalindrome[start][end] = false;
        helper(s,start+1,end,isPalindrome);
        helper(s,start,end-1,isPalindrome);
    }
    return isPalindrome[start][end];
}