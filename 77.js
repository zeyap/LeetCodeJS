var combine = function(n, k) {
    let comb = [];
    let _combine = (n,k)=>{
        if(comb[n]===undefined)comb[n]=[];
        if(comb[n][k])return comb[n][k];
        if(n<k){comb[n][k] = []; return comb[n][k];}
        if(k===0){comb[n][k]=[[]]; return comb[n][k];}
        if(k===1){
            comb[n][1]= [];
            for(let i=1;i<=n;i++){
                comb[n][1].push([i]);
            }
            return comb[n][k];
        }
        comb[n][k]=_combine(n-1,k-1).map((arr)=>[...arr, n]).concat(_combine(n-1,k));
        return comb[n][k];
    }
    return _combine(n,k);
};

/*
如果写成下面这样会导致map的原值被修改
comb[n][k]=_combine(n-1,k-1).map((arr)=>{arr.push(n); return arr;}).concat(_combine(n-1,k));
*/