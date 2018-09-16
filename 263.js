var isUgly = function(num) {
    if(num===0)return false;
    [2,3,5].forEach((factor)=>{
        while(num&&num%factor===0){
            num/=factor;
        }
    })
    return num===1;
};
