var combinationSum3 = function(k, n) {
    var res = [];
    let solution = [];
    var combination=(comb,sum)=>{
        if(k===comb.length){
            if(sum===n){
               res.push([...comb]);
               return true;
            }
            return false;
        }
        for(let i=comb.length>0?comb[comb.length-1]+1:1;i<=9;i++){
            if(sum>n)break;
            comb.push(i);
            let t = combination(comb,sum+i);
            comb.pop();
            if(t===true)break;
        }
    }
    combination(solution,0)
    return res;
};
