var kthGrammar = function(N, K) {
    let path = [];//0-left, 1-right
    while(K>1){
        if(K%2===0){
            path.unshift(1);
        }else{
            path.unshift(0);
        }
        K = Math.ceil(K/2);
    }
    let curr=0;
    let child = [[0,1],[1,0]];
    for(let i=0;i<path.length;i++){
        curr = child[curr][path[i]];
    }
    return curr;
};

//Bit manipulation
var kthGrammar = function(N, K) {
    K-=1;
    let curr=0;
    while(K){
        curr ^= (K&1);
        K>>=1;
    }
    return curr;
};

