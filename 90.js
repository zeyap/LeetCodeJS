var subsetsWithDup = function(nums) {
    let res = [[]];
    let map={};
    nums.forEach((num)=>{
        map[num]=map[num]?map[num]:0;
        map[num]++;
    })
    for(let num in map){
        let resDup = [...res];
        let count = map[num];
        let append = [];
        let n = parseInt(num);
        for(let i= 1 ;i<=count;i++){
            let resDupi = [...resDup];
            append.push(n);
            for(let j=0;j<resDupi.length;j++){
                resDupi[j] = resDupi[j].concat(append);
            }
            res = res.concat(resDupi);
        }
    }
    return res;
};
