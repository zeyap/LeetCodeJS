// Dictionary

var twoSum = function(numbers, target) {
    let dict={};
    for(let i=0;i<numbers.length;i++){
        let number=numbers[i];
        if(dict[target-number]){
            return [dict[target-number],i+1]
        }
        dict[number]=i+1;   
    }
};


// Binary search

var twoSum = function(numbers, target) {
    var binSearch = (lo,hi,t)=>{
        while(lo<=hi){
            let mid = parseInt((lo+hi)/2);
            if(numbers[mid]===t){
                return mid;
            }else if(numbers[mid]>t){
                hi = mid-1;
            }else{
                lo = mid+1;
            }
        }
        return -1;
    }
    for(let i=0;i<numbers.length;i++){
        let temp = target-numbers[i];
        //find with binary search
        let res = binSearch(i+1,numbers.length-1,temp);
        if(res>=0) return [i+1,res+1];
    }
};


// Two-pointer

var twoSum = function(numbers, target) {
    let left=0,right=numbers.length-1;
    while(left<=right){
        let sum = numbers[left]+ numbers[right];
        if(sum===target){
            return [left+1,right+1];
        }else if(sum<target){
            left++;
        }else{
            right--;
        }
    }
};
