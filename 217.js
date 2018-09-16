// Sorting

// hash table

var containsDuplicate = function(nums) {
    let map={};
    let isDuplicate = false;
    nums.forEach((item)=>{
        map[item]=(++map[item])||1;
        if(map[item]>1) isDuplicate = true;
    })
    return isDuplicate;
};
