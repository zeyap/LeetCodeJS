// Greedy

var maxSubArray = function(nums) {
    var sum=0;
    var maxSum=-Infinity;
    for(var i=0;i<nums.length;i++){
        sum+=nums[i];
        if(sum>maxSum){
            maxSum=sum;
        }
        if(sum<0){
            sum=0;
        }
    }
    return maxSum;
};


// Divide & conquer

var maxSubArray = function(nums) {
    var maxSubArr=function(l,r){
        if(l===r){
            return [nums[l],nums[l],nums[l],nums[l]];
        }
        let mid=parseInt((l+r)/2);
        let [max1,lmax1,rmax1,sum1]=maxSubArr(l,mid);
        let [max2,lmax2,rmax2,sum2]=maxSubArr(mid+1,r);
        return [Math.max(Math.max(max1,max2),rmax1+lmax2),
                Math.max(sum1+lmax2,lmax1),
                Math.max(rmax1+sum2,rmax2),
                sum1+sum2];
    }
    let [maxSum]=maxSubArr(0,nums.length-1);
    return maxSum;
};