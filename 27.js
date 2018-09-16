var removeElement = function(nums, val) {
    for(let i=0;i<nums.length;i++){
        if(nums[i]===val){
            nums.splice(i,1);
            i--;
        }
    }
    return nums.length;
};

var removeElement = function(nums, val) {
    let begin = 0;
    for(let i=0;i<nums.length;i++){
        if(nums[i]!==val){
            nums[begin] = nums[i];
            begin++;
        }
    }
    nums.length = begin;
    return begin;
};
