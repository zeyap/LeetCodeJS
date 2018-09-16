var findMin = function(nums) {
    let min = nums[0], lo=1, hi = nums.length;
    while(lo<=hi){
        let mid = parseInt((lo+hi)/2);
        if(nums[mid-1]>nums[mid]){
            min = min<nums[mid]?min:nums[mid];
            break;
        }
        if(min>nums[mid]){hi = --mid;}
        else{lo = ++mid;}
    }
    return min;
};
