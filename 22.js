//using backtracking

var generateParenthesis = function(n) {
    var ans=[];
    var backtrack = function(curr,open,close){
        if(curr.length===n*2){
            ans.push(curr);
            return;
        }
        if(open<n){
            backtrack(curr+"(",open+1,close);
        }
        if(close<open){
            backtrack(curr+")",open,close+1)
        }
    }
    backtrack("",0,0);
    return ans;
};
