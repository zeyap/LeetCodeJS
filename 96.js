//dynamic programming DP
var numTrees = function(n) {
    let g=[1,1];
    let _numTrees=(n)=>{
        if(g[n]!==undefined) return g[n];
        let res = 0;
        for(let i=1;i<=n;i++){
            res+=_numTrees(i-1)*_numTrees(n-i);
        }
        g[n]=res;
        return g[n];
    }
    return _numTrees(n);
};
