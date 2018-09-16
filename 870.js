var advantageCount = function(A, B) {
    let [sortedA,sortedB]=[A.map((num,id)=>({num,id})).sort((a,b)=>{return a.num-b.num;}),
                           B.map((num,id)=>({num,id})).sort((a,b)=>{return a.num-b.num;})];
    let permutation = [];
    let undecided = [];
    let j=0;
    for(let i=0;i<sortedA.length;i++){
        if(sortedA[i].num>sortedB[j].num){
            permutation.push({num:sortedA[i].num,id:sortedB[j].id});
            j++;
        }else{
            undecided.push(sortedA[i].num);
        }
    }
    // console.log(permutation)
    let ret = [];
    for(let i=0;i<permutation.length;i++){
        ret[permutation[i].id] = permutation[i].num;
    }
    
    if(undecided.length===0)return ret;
    
    for(let i=0;i<B.length;i++){
        if(ret[i]===undefined)
            ret[i] = undecided.shift();
    }
    
    return ret
};
