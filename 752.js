var openLock = function(deadends, target) {
    let stk=['0000'];
    let deads = {};
    deadends.forEach((deadend)=>{
        deads[deadend] = 1;
    })
    if(deads['0000'])return -1;
    
    let visited={};
    let step=0;
    visited['0000']=true;
    while(stk.length>0){
        step++;
        let levelNum = stk.length;
        for(let i=0;i<levelNum;i++){
            let elem = stk.shift();
            for(let j=0;j<4;j++){
                for(let k=0;k<2;k++){
                    let curr = elem;
                    let temp = curr.charCodeAt(j)+(2*k-1);
                    curr = curr.split('');
                    curr[j]=String.fromCharCode(temp>57?48:(temp<48?57:temp));
                    curr = curr.join('');
                    if(curr===target){
                        return step;
                    }
                    if(!deads[curr]&&!visited[curr]){
                        stk.push(curr);
                        visited[curr]=true;
                    }
                }
            }
        }
    }
    return -1;
};
