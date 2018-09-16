var eventualSafeNodes = function(graph) {
    let safe=[];//true or false
    let visited = [];
    let stk=[0];
    while(stk.length>0){
        let curr = stk.pop();
        safe[curr] = dfs(graph,visited,curr,safe);
        for(let i=0;i<graph.length;i++){
            if(safe[i]===undefined){stk.push(i);break;}
        }
        visited=[];
    }
    let res = [];
    for(let i=0;i<safe.length;i++){
        if(safe[i])res.push(i);
    }
    return res;
};

var dfs = (graph,visited,i,safe)=>{
    if(safe[i])return safe[i];
    if(visited[i]) return false;
    visited[i]=true;
    let allsafe = true;
    for(let j=0;j<graph[i].length;j++){
        safe[graph[i][j]]=dfs(graph,visited,graph[i][j],safe);
        if(safe[graph[i][j]]===false){allsafe=false;break;}
    }
    return allsafe;
}
