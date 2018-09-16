//Sort and access kth element: O(N lg N) running time + O(1) memory
var findKthLargest = function(nums, k) {
    nums.sort(function(a,b){
        return a-b;
    });
    return nums[nums.length-k];
};

//quicksort
//O(N) best case / O(N^2) worst case running time + O(1) memory

var findKthLargest = function(nums, k) {
    shuffle(nums);
    let lo = 0, hi = nums.length-1;
    k = nums.length-k;
    while(lo<hi){
        let j = partition(nums, lo ,hi);
        if(j<k){
            lo = j+1;
        }else if(j>k){
            hi = j-1;
        }else{
            break;
        }
    }
    return nums[k];
};

var shuffle = (nums)=>{
    for(let i=0;i<nums.length;i++){
        let r= Math.floor(Math.random()*nums.length);
        exch(nums,i,r);
    }
}

var partition = (nums,lo,hi)=>{
    let i = lo, j = hi+1;
    let v = nums[lo];
    while(true){
        while(nums[++i]<v)if(i===hi)break;
        while(nums[--j]>v)if(j===lo)break;
        if(i>=j)break;
        exch(nums, i,j);
    }
    exch(nums, lo, j);
    return j;
}

var exch = (nums, i,j)=>{
    let t = nums[i];
    nums[i] = nums[j];
    nums[j] = t;
}
