var minCostClimbingStairs = function(cost) {
    let minCost= [];
    for(let i=0;i<cost.length;i++){
        if(i===0) minCost[i] = cost[i];
        else if(i===1) minCost[i] = cost[1];
        else{
            minCost[i] = Math.min(minCost[i-1],minCost[i-2])+cost[i];
        }
    }
    return Math.min(minCost[cost.length-1],minCost[cost.length-2]);
};
