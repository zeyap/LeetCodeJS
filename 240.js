var searchMatrix = function(matrix, target) {
    if(matrix===null||matrix.length<1||matrix[0].length<1){
        return false;
    }
    let row = 0, col = matrix[0].length-1;
    while(row<=matrix.length-1&&col>=0){
        if(target===matrix[row][col]){
            return true;
        }else if(target<matrix[row][col]){
            col--;
        }else{
            row++;
        }
    }
    return false;
};
