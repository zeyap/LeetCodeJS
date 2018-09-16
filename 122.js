//Peak-valley approach

var maxProfit = function(prices) {
    let buy=[];
    let i=0;
    while(i<prices.length){
        let start = i;
        while(prices[i]<prices[i+1]){
            i++;
        }
        if(start!==i){
            buy.push([start,i]);   
        }else{
            i++;
        }
    }
    let res=0;
    buy.forEach((day)=>{
        res+=prices[day[1]]-prices[day[0]];
    })
    return res;
};

//simple one pass

var maxProfit = function(prices) {
    let res=0;
    let end=0;
    while(end<prices.length){
        let start = end;
        while(prices[end]<prices[end+1]){
            end++;
        }
        if(start!==end){
            res+=prices[end]-prices[start];
        }else{
            end++;
        }
    }
    return res;
};