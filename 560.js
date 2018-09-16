// Using Cumulative Sum
var subarraySum = function(nums, k) {
    let sum = [];
    let count=0;
    for(let i=0;i<=nums.length;i++){
        if(i===0)sum[i] = 0;
        else{sum[i]=sum[i-1]+nums[i-1];}
    }
    for(let start = 0;start<=nums.length;start++){
        for(let end = start+1; end<=nums.length;end++){
            // console.log(end,start)
            if(sum[end]-sum[start]===k)count++; 
        }
    }
    return count;
};


// Without Space
var subarraySum = function(nums, k) {
    let count=0;
    for(let start = 0;start<nums.length;start++){
        let sum = 0;
        for(let end = start ; end<nums.length;end++){
            sum+=nums[end];
            if(sum===k)count++;
        }
    }
    return count;
};


// Using Hashmap
var subarraySum = function(nums, k) {
    let count=0;
    let sum = 0;
    let map = new Map();
    map.set(0,1);
    for(let i=0;i<nums.length;i++){
        sum+=nums[i];
        if(map.has(sum-k)){
            count+=map.get(sum-k);
        }
        let temp = map.has(sum)?map.get(sum):0;
        map.set(sum,temp+1);
    }
    
    return count;
};


