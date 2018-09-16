var rotate = function(matrix) {
    matrix.reverse();
    let n = matrix.length;
    for(let i=0;i<n;i++){
        for(let j=i+1;j<n;j++){
            let temp = matrix[j][i];
            matrix[j][i]=matrix[i][j];
            matrix[i][j]=temp;
        }
    }
};
