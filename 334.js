var increasingTriplet = function(nums) {
    let larger = [];
    for(let i=0;i<nums.length;i++){
        larger[i] = [];
        for(let j=i+1;j<nums.length;j++){
            if(nums[j]>nums[i]){
                larger[i].push(j);
            }
        }
    }
    for(let i=0;i<nums.length;i++){
        for(let j=0;j<larger[i].length;j++){
            if(larger[larger[i][j]].length>0) return true;
        }
    }
    return false;
};
