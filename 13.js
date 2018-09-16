var romanToInt = function(s) {
    let map={
        'I':1,
        'V':5,
        'X':10,
        'L':50,
        'C':100,
        'D':500,
        'M':1000
    }
    let res = 0;
    for(let i=0;i<s.length;i++){
        if((s[i]==='I'&&(s[i+1]==='V'||s[i+1]==='X'))||
          (s[i]==='X'&&(s[i+1]==='L'||s[i+1]==='C'))||
          (s[i]==='C'&&(s[i+1]==='D'||s[i+1]==='M'))){
            res+=map[s[i+1]]-map[s[i]];
            i++;
        }else{
            res+=map[s[i]];
        }
    }
    return res;
};

//cleaner:

var romanToInt = function(s) {
    let map={
        'I':1,
        'V':5,
        'X':10,
        'L':50,
        'C':100,
        'D':500,
        'M':1000
    }
    let res = 0;
    for(let i=0;i<s.length;i++){
        if(map[s[i]]<map[s[i+1]]){
            res-=map[s[i]];
        }else{
            res+=map[s[i]];
        }
    }
    return res;
};
