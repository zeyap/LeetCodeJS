var productExceptSelf = function(nums) {
    let zeroCnt = 0, firstZeroId = -1, product = 1;
    for(let i=0;i<nums.length;i++){
        if(nums[i]===0){
            zeroCnt++;
        }else{
            product *= nums[i];
        }
    }
    if(zeroCnt>1){
        return nums.map((num)=>0);
    }else if(zeroCnt===1){
        return nums.map((num)=>num===0?product:0);
    }else{
        return nums.map((num)=>product/num);
    }
};
