// walk the spiral

var generateMatrix = function(n) {
    let m = [];
    for(let i=0;i<n;i++){
        m[i]=[];
        for(let j=0;j<n;j++)m[i][j]=0;
    }
    m[-1]=[],m[n]=[];
    
    let count = 1, i = 0, j=0, dir = 0;//0,1,2,3
    let di = [1,0,-1,0], dj=[0,1,0,-1];
    while(count<=n*n){
        while(m[j][i]!==undefined){
            if(m[j][i]!==0)break;
            m[j][i]=count;
            count++;
            i+=di[dir];j+=dj[dir];
        }
        i-=di[dir];j-=dj[dir];
        switch(dir){
            case 0:
            j++;
            break;
            case 1:
            i--;
            break;
            case 2:
            j--;
            break;
            case 3:
            i++;
            break;
        }
        dir = dir+1>3?0:dir+1;
    }
    return m.slice(0,n);
    
};
