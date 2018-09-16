var isValid = function(s) {
    let pair={
        '{':'}',
        '(':')',
        '[':']'
    }
    let stk = [];
    for(let i=0;i<s.length;i++){
        if(stk.length===0||pair[s[i]]){
            stk.push(s[i]);
        }else{
            let rear = stk[stk.length-1];
            if(pair[rear]===s[i]){
                stk.pop();
            }else{
                return false;
            }
        }
    }
    if(stk.length>0)return false;
    return true;
};
