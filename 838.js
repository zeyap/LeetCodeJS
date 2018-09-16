var pushDominoes = function(dominoes) {
    let res = '';
    let r = 0, l= 0, d=0;
    let q = [];
    for(let i=0;i<dominoes.length;i++){
        switch(dominoes[i]){
            case 'L':
                if(r===0){//...L
                    res+='L'.repeat(d+1);
                }else{//'R...L'
                    let halfd = Math.floor(d/2);
                    res+='R'.repeat(halfd+r)+'.'.repeat(d-2*halfd)+'L'.repeat(halfd+1);
                }
                q=[];r=0,l=0,d=0;
                break;
            case '.':
                q.push('.');
                d++;
                break;
            case 'R':
                if(d>0){
                    if(r===0){//...(R)
                        res+='.'.repeat(d); 
                    }else{
                        //R...(R)
                        res+='R'.repeat(d+r);
                        r=0;
                    }
                    q=[];d=0;
                }
                q.push('R');
                r++;
                //'R...'
                break;
        }
    }
    if(q.length>0){
        if(r===0||d===0){
            res+=q.join('');
        }else{
            res+='R'.repeat(q.length);
        }
    }
    return res;
};