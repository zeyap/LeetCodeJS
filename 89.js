//backtracking

var grayCode = function(n) {
    if(n===1)return [0,1];
    if(n===0)return [0];
    let res = grayCode(n-1);
    let nextRes = [];
    nextRes = nextRes.concat(res.map((r)=>(r<<1)));
    nextRes = nextRes.concat(nextRes.map((r)=>(r+1)).reverse());
    return nextRes;
};
