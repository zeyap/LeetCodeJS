// Memoization

var findMaxForm = function(strs, m, n) {
    let length =[];
    for(let i = 0;i<strs.length;i++){
        length[i]=[];
        for(let j=0;j<=m;j++){
            length[i][j]=[];
        }
    }
    return maxForm(strs,0,m,n,length);
};

var maxForm = function(strs,id,m,n,length){
    if(m<0||n<0)return 0;
    if(length[id][m][n])return length[id][m][n];
    let ones = 0;
    let zeros = 0;
    for(let i=0;i<strs[id].length;i++){
        if(strs[id][i]==='0')zeros++;
        else ones++;
    }
    if(id===strs.length-1){
        length[id][m][n] = (zeros<=m&&ones<=n)?1:0;
    }else{
        length[id][m][n] = (zeros<=m&&ones<=n)?
            Math.max(maxForm(strs,id+1,m-zeros,n-ones,length)+1,maxForm(strs,id+1,m,n,length)):maxForm(strs,id+1,m,n,length);
    }
    return length[id][m][n];
};

// Bottom-up

var findMaxForm = function(strs, m, n) {
    let length =[];
    for(let i = 0;i<=strs.length;i++){
        length[i]=[];
        for(let j=0;j<=m;j++){
            length[i][j]=[];
            for(let k=0;k<=n;k++){
                length[i][j][k]=0;
            }
        }
    }
    
    for(let i=strs.length-1;i>=0;i--){
        let ones = 0;
        let zeros = 0;
        for(let j=0;j<strs[i].length;j++){
            if(strs[i][j]==='0')zeros++;
            else ones++;
        }
        for (let j=0;j<=m;j++){
            for (let k=0;k<=n;k++){
                length[i][j][k] = (zeros<=j&&ones<=k)?Math.max(length[i+1][j-zeros][k-ones]+1,length[i+1][j][k]):length[i+1][j][k];
            }
        }
    }
    
    return length[0][m][n];
};


// 2D dp solution

var findMaxForm = function(strs, m, n) {
    let length =[];
    for(let j=0;j<=m;j++){
        length[j]=[];
        for(let k=0;k<=n;k++){
            length[j][k]=0;
        }
    }
    
    for(let i=strs.length-1;i>=0;i--){
        let ones = 0;
        let zeros = 0;
        for(let j=0;j<strs[i].length;j++){
            if(strs[i][j]==='0')zeros++;
            else ones++;
        }
        for (let j=m;j>=zeros;j--){
            for (let k=n;k>=ones;k--){
                length[j][k] = Math.max(length[j-zeros][k-ones]+1,length[j][k]);
            }
        }
    }
    
    return length[m][n];
};

