var sortColors = function(nums) {
    let lt=0, gt = nums.length-1;
    while(lt<=gt){
        if(nums[lt]<=1){
            lt++;
        }else if(nums[lt]>1){
            exch(nums,lt,gt);
            gt--;
        }
    }
    lt=0;
    while(lt<gt){
        if(nums[lt]<1){
            lt++;
        }else if(nums[lt]===1){
            exch(nums,lt,gt);
            gt--;
        }
    }
};

var exch = function(nums, i, j){
    let temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
}
