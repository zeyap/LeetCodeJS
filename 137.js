var singleNumber = function(nums) {
    let ones=0,twos=0;
    nums.forEach((num)=>{
        ones = (ones^num)&~twos;
        twos = (twos^num)&~ones;
    })
    return ones;
};
