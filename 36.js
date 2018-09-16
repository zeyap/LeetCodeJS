var isValidSudoku = function(board) {
    let valid = [];//0-8 vertical, 9-17 block, 18 horizontal
    for(let i=0;i<19;i++){
        valid[i] = {};
    }
    for(let r=0;r<board.length;r++){
        for(let c=0;c<board.length;c++){
            if(board[r][c]==='.')continue;
            let block = Math.floor(c/3)+Math.floor(r/3)*3;
            let d = board[r][c];
            if(valid[18][d]===1||valid[c][d]===1||valid[9+block][d]===1){
                return false;
            }else{
                valid[18][d] = 1;
                valid[c][d] = 1;
                valid[9+block][d] = 1;
            }
        }
        valid[18] = {};
    }
    return true;
};
