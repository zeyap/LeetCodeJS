var moveZeroes = function(nums) {
    let id = 0;
    nums.forEach(function(num,i){
        if(id<nums.length){
            while(nums[id]===0&&id<nums.length-1){
                id++;   
            }
            nums[i] = nums[id++];
        }else{
            nums[i]=0;
        }
    })
};



var moveZeroes = function(nums) {       
    for(var i = nums.length;i--;){
        if(nums[i]===0){
            nums.splice(i,1)
            nums.push(0);
        }
    }
};
