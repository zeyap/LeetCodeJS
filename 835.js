var largestOverlap = function(A, B) {
    let len = A.length;
    let max=0;
    for(let offsetx = -len+1;offsetx<len;offsetx++){
        for(let offsety = -len+1;offsety<len;offsety++){
            let sum = 0;
            let ceil1 = Math.min(len,len-offsetx);
            for(let x=Math.max(0,-offsetx);x<ceil1;x++){
                let ceil2=Math.min(len,len-offsety);
                for(let y=Math.max(0,-offsety);y<ceil2;y++){
                    sum+=A[x][y]*B[x+offsetx][y+offsety];
                }
            }
            if(sum>max)max = sum;
        }
    }
    return max;
};
