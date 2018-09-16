var nthUglyNumber = function(n) {
    let t = {'2':0,'3':0,'5':0};
    let k = [];
    k[0]=1;
    for(let i=1;i<n;i++){
        k[i] = Math.min(k[t[2]]*2,Math.min(k[t[3]]*3,k[t[5]]*5));
        if(k[i]===k[t[2]]*2)t[2]++;
        if(k[i]===k[t[3]]*3)t[3]++;
        if(k[i]===k[t[5]]*5)t[5]++;
    }
    console.log(k)
    return k[n-1];
};
