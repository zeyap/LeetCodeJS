var isHappy = function(n) {
    let s = n.toString();
    let repeat = '';
    while(1){
        let sum = s.split('').reduce((addSum,item)=>{let d = parseInt(item); return addSum+d*d;},0);
        s= sum.toString();
        if(s.length===1){
            if(repeat===s&&s!=='1')
                return false; 
            else repeat = s;
            if(s==='1')
                return true;
        }
    }
};
