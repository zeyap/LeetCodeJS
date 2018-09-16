// TLE:

var maxProfit = function(prices) {
    if(prices.length===0)return 0;
    let memo = [];
    return profit(prices,0,prices.length-1,memo);
};

var profit = function(prices,start,end,memo){ //max profit during start~end
    memo[start] = memo[start]||[];
    if(memo[start][end]!==undefined)return memo[start][end];
    if(start===end){memo[start][end]=0;return 0;}
    if(end-start===1){memo[start][end] = Math.max(prices[end]-prices[start],0); return memo[start][end];}
    if(start>end)return 0;
    
    let ans = 0;
    for(let i=start;i<=end;i++){
        for(let j=i+1;j<=end;j++){
            let p = prices[j]-prices[i]+profit(prices,j+2,end,memo);
            ans = Math.max(p,ans);
        }
    }
    memo[start][end] = ans;
    return ans;
};


// Accepted (State machine)

var maxProfit = function(prices) {
    //have 0 stock, buy 1 on day i (if did not sell on the last day)
    //have 0 stock, cooldown
    //have 1 stock, sell 1
    //have 1 stock, cooldown
    let s0=[],//cooldown
        s1=[],//have 1 stock
        s2=[];//just sold
    s0[0] = 0, s1[0] = -prices[0], s2[0] = Number.MIN_VALUE;
    for(let i=1;i<prices.length;i++){
        s0[i] = Math.max(s0[i-1],s2[i-1]);
        s1[i] = Math.max(s0[i-1]-prices[i],s1[i-1]);
        s2[i] = s1[i-1]+prices[i];
    }
    return Math.max(s0[s0.length-1],s2[s2.length-1])
};

