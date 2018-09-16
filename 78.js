var subsets = function(nums) {
    let sub = [[]];
    for(let i=0;i<nums.length;i++){
        let newsub = sub.map((s)=>
            [nums[i],...s])
        sub  = sub.concat(newsub);
    }
    return sub;
};
