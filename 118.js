var generate = function(numRows) {
    let res = [];
    for(let i=0;i<numRows;i++){
        res[i]=[];
        if(i===0){res[i]=[1];continue;}
        for(let j=0;j<i+1;j++){
            let x = res[i-1][j-1]||0;
            let y = res[i-1][j]||0;
            res[i][j] = x+y;
        }
    }
    return res;
};
