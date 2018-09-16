var solveEquation = function(equation) {
    let s = equation.split('=');
    let coeff =0, val=0;
    let sign = 1;
    for(let i=0;i<2;i++){
        for(let j=0;j<s[i].length;j++){
            if(j===0&&s[i][j]==='-'){
                sign = -1;
                j++;
            }
            sign*=i===0?1:-1;
            let start = j;
            while(s[i][j]!=='+'&&s[i][j]!=='-'){
                j++;
                if(j>=s[i].length)break;
            }
            if(s[i][j-1]==='x'){
                let comp =s[i].slice(start,j-1);
                coeff+= sign*(comp.length===0?1:parseInt(comp));
            }else{
                let comp =s[i].slice(start,j);
                val-= sign*(comp.length===0?0:parseInt(comp));
            }
            sign = (s[i][j]==='-'?-1:1);
        }
    }
    if(coeff===0&&val===0)return 'Infinite solutions';
    else if(coeff===0&&val!==0)return 'No solution';
    else return 'x='+parseInt(val/coeff);
};
