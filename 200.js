//BFS: time limit exceeds

var numIslands = function(grid) {
    let cnt = 0;
    for(let i=0;i<grid.length;i++){
        for(let j=0;j<grid[0].length;j++){
            if(grid[i][j]==="1"){
                bfs(grid,i,j);
                cnt++;
            }
        }
    }
    return cnt;
};

var bfs = function(grid,m,n){
    let stk = [[m,n]];
    let dx = [0,0,1,-1];
    let dy = [1,-1,0,0];
    while(stk.length>0){
        let len = stk.length;
        for(let cnt=0;cnt<len;cnt++){
            let [i,j] = stk.shift();
            grid[i][j] = "0";
            for(let k=0;k<4;k++){
                let [x,y] = [i+dx[k],j+dy[k]]
                if(grid[x]&&grid[x][y]==="1"){
                    stk.push([x,y])
                }
            }
        }
    }
}

//DFS: pass

var numIslands = function(grid) {
    let cnt = 0;
    for(let i=0;i<grid.length;i++){
        for(let j=0;j<grid[0].length;j++){
            if(grid[i][j]==="1"){
                dfs(grid,i,j);
                cnt++;
            }
        }
    }
    return cnt;
};

var dfs = function(grid,i,j){
    let dx = [0,0,1,-1];
    let dy = [1,-1,0,0];
    grid[i][j] = "0";
    for(let k=0;k<4;k++){
        let [x,y] = [i+dx[k],j+dy[k]]
        if(grid[x]&&grid[x][y]==="1"){
            dfs(grid,x,y);
        }
    }
}
