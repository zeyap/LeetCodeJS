/*
HashMap
Time complexity: O(n)
Space: O(n)
*/

var majorityElement = function(nums) {
    let map ={};
    let half = parseInt(nums.length/2);
    nums.forEach((num)=>{
        map[num]=(map[num]+1)||1;
    })
    for(num in map){
        if(map[num]>half) return parseInt(num);
    }
};

/*
Sorting
O(nlgn), O(1)/O(n)
*/

var majorityElement = function(nums) {
    let sorted = nums.sort();
    let mid = parseInt(nums.length/2);
    return sorted[mid];
};


//Randomization

/*
Divide and Conquer
O(nlgn), O(lgn)
*/

var majorityElement = function(nums) {
    
    let countInRange=(target, lo,hi)=>{
        let count=0;
        for(let i=lo;i<=hi;i++){
            if(nums[i]===target)count++;
        }
        return count;
    }
    
    let _majorityElement = (lo,hi)=>{
        
        if(lo===hi){
            return nums[lo];
        }
        
        let mid = parseInt((lo + hi)/2);
        let left = _majorityElement(lo,mid);
        let right = _majorityElement(mid+1,hi);
        
        if(left===right)return left;
        
        let leftCount = countInRange(left, lo,hi);
        let rightCount = countInRange(right, lo,hi);
        
        return (leftCount>rightCount)?left:right;
    }
    return _majorityElement(0,nums.length-1);
};

/*
Boyer-Moore Voting Algorithm
基本思想：每次都找出一对不同的元素，从数组中删掉，直到数组为空或只有一种元素。 不难证明，如果存在元素e出现频率超过半数，那么数组中最后剩下的就只有e。
*/

var majorityElement = function(nums) {
    let sum=0;
    let candidate;
    nums.forEach((num)=>{
        if(sum===0){
            candidate=num;
        }
        sum+=num===candidate?1:-1;
    })
    return candidate;
};