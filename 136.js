var singleNumber = function(nums) {
    var ones=[];
    nums.sort(function(a,b){
        return a-b;
    })
    while(nums.length>0){
        let num = nums.shift();
        ones.push(num);
        if(num===nums[0]){
            ones.pop();
            nums.shift();
        }
    }
    return ones;
};


var singleNumber = function(nums) {
    var ones=[];
    var map={};
    for(var i=0;i<nums.length;i++){
        if(map[nums[i]]){
            delete map[nums[i]];
        }else{
            map[nums[i]]=1;
        }
    }
    for(var key in map){
        ones.push(parseInt(key));
    }
    return ones;
};

