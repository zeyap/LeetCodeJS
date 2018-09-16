var isBipartite = function(graph) {
    if(graph.length===0)return false;
    let determined=[]
    let i=0;
    let stk=[0];
    while(stk.length>0){
        i = stk.pop();
        for(let j=0;j<graph[i].length;j++){
            if(determined[graph[i][j]]){
                if(determined[graph[i][j]]===determined[i])return false;
                continue;
            }
            determined[graph[i][j]]=determined[i]===1?2:1;
            stk.push(graph[i][j]);
        }
        
        if(stk.length===0){
            //find another component
            for(let j=0;j<graph.length;j++){
                if(!determined[j]&&graph[j].length>0){
                    stk.push(j);
                }
            }
        }
        
    }
    
    return true;
};
