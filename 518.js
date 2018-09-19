//dynamic programming

var change = function(amount, coins) {
    let memoir = [];// memoir[start][amount] the change solution number with coin[start~len-1] to sum up to amount
    if(amount===0)return 1;
    else if(coins.length===0) return 0;
    let len = coins.length;
    for(let i=len-1;i>=0;i--){
        memoir[i] = [];
        for(let n=0;n<=amount;n++){
            if(i===len-1){//base case: i===len-1
                memoir[len-1][n] = n%(coins[len-1])===0?1:0;
                continue;
            }
            let sum =0;
            for(let j=0;j<=n/coins[i];j++){
                if(n-coins[i]*j>=0){
                    sum+= memoir[i+1][n-coins[i]*j];
                }
            }
            memoir[i][n] = sum;
        }
    }
    return memoir[0][amount];
};
