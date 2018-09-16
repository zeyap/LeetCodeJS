var reverse = function(x) {
    let limit, sign;
    if(x>=0){
        limit= Math.pow(2,31)-1;
        sign =1;
    }else{
        limit= Math.pow(2,31);
        x = -x;
        sign = -1;
    }
    
    let rev = 0;
    while(x>0){
        rev= rev*10+x%10;
        x = parseInt(x/10);
        if(rev>limit)return 0;
    }
    return sign*rev
};
