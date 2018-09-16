var numJewelsInStones = function(J, S) {
    let map = {};
    for(let i=0;i<J.length;i++){
        map[J[i]] = true;
    }
    let cnt = 0;
    for(let i=0;i<S.length;i++){
        if(map[S[i]]){
            cnt++;
        }
    }
    return cnt;
};
