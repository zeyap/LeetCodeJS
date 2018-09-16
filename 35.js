var searchInsert = function(nums, target) {
    let lo=0, hi=nums.length-1;
    while(lo<=hi){
        if((nums[lo]-target)*(nums[hi]-target)>0){
            return nums[lo]-target>0?lo:hi+1;
        }
        let mid = Math.floor((lo+hi)/2);
        if(nums[mid]===target){
            return mid;
        }else if(nums[mid]>target){
            hi = mid-1;
        }else{
            lo = mid+1;
        }
    }
};
