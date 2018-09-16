var diffWaysToCompute = function(input) {
    let ret=[];
    for(let lbound=1;lbound<=input.length-1;lbound++){
        if(input[lbound]!=='+'&&input[lbound]!=='-'&&input[lbound]!=='*'){
            continue;
        }
        let operator = input[lbound];
        let left = diffWaysToCompute(input.slice(0,lbound));
        let right = diffWaysToCompute(input.slice(lbound+1));
        left.forEach((l)=>{
            right.forEach((r)=>{
                let res;
                switch(operator){
                    case '+':
                        res = l+r;
                        break;
                    case '-':
                        res = l-r;
                        break;
                    case '*':
                        res = l*r;
                        break;
                }
                ret.push(res);
            })
        })
    }
    if(ret.length===0){
        return [parseInt(input)];
    }
    return ret;
};
