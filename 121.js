// One pass
var maxProfit = function(prices) {
    let lowestPrice=Number.MAX_VALUE,maxProfit=0;
    for(let i=0;i<prices.length;i++){
        if(prices[i]<lowestPrice){
            lowestPrice = prices[i];
        }else{
            let profit = prices[i]-lowestPrice;
            if(profit>maxProfit){
                maxProfit = profit;
            }
        }
    }
    return maxProfit;
};

// Kadane's algorithm
var maxProfit = function(prices) {
    let diffs=prices.map((price,id)=>{
        if(id===0)return 0;
        else return price-prices[id-1];
    })
    let maxProfit=0;
    let maxSoFar=0;
    for(let i=0;i<diffs.length;i++){
        maxProfit=diffs[i]>maxProfit+diffs[i]?diffs[i]:maxProfit+diffs[i];
        maxSoFar=(maxProfit>maxSoFar)?maxProfit:maxSoFar;
    }
    return maxSoFar;
};

