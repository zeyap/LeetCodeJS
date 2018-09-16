var gameOfLife = function(board) {
    var neighborNum = (r,c)=>{
        let num=0;
        for(let i=r-1;i<=r+1;i++){
            if(i<0)continue;
            if(i>board.length-1)break;
            for(let j=c-1;j<=c+1;j++){
                if(i==r&&j==c)continue;
                if(j<0)continue;
                if(j>board[i].length-1)break;
                num+=board[i][j]&1;
            }
        }
        return num;
    }
    board.forEach((row,r)=>{
        for(let i=0;i<row.length;i++){
            let num = neighborNum(r,i);
            if(row[i]===0&&num===3){
                row[i] = 2;
            }else if(row[i]===1&&num<=3&&num>=2){
                row[i]=3;
            }
        }
    })
    board.forEach((row)=>{
        for(let i=0;i<row.length;i++){
            row[i]>>=1;
        }
    })
};
