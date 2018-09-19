var setZeroes = function(matrix) {
    let r0zeros = false,c0zeros = false;
    for(let i=0;i<matrix.length;i++){
        if(matrix[i][0]===0)c0zeros=true;
    }
    for(let i=0;i<matrix[0].length;i++){
        if(matrix[0][i]===0)r0zeros=true;
    }
    for(let i=1;i<matrix.length;i++){
        for(let j=1;j<matrix[0].length;j++){
            if(matrix[i][j]===0){
                matrix[i][0]=0;
                matrix[0][j]=0;
            }
        }
    }
    for(let i=1;i<matrix.length;i++){
        if(matrix[i][0]===0){
            for(let j=1;j<matrix[i].length;j++)
                matrix[i][j]=0;
        }
    }
    for(let i=1;i<matrix[0].length;i++){
        if(matrix[0][i]===0){
            for(let j=1;j<matrix.length;j++)
                matrix[j][i]=0;
        }
    }
    
    if(r0zeros){
        for(let i=0;i<matrix[0].length;i++){
            matrix[0][i]=0;
        }
    }
    
    if(c0zeros){
        for(let i=0;i<matrix.length;i++){
            matrix[i][0]=0;
        }
    }
    
};