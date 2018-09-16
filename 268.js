var missingNumber = function(nums) {
    let xor = (accumulator, currVal)=>accumulator^currVal;
    let nArray = [];
    for(let i=0;i<=nums.length;i++){
        nArray.push(i);
    }
    return nums.reduce(xor,0)^nArray.reduce(xor,0);
};
