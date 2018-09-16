var maximumSwap = function(num) {
    num = num.toString().split('');
    let arr = num.toString().split('').sort((a,b)=>a>b?-1:1);
    
    for(let i=0;i<num.length;i++){
        if(num[i]!==arr[i]){
            //exchange num[i] with arr[i];
            let j = indexOf(num,arr[i],i);
            let temp = num[i];
            num[i] = num[j];
            num[j] = temp;
            break;
        }
    }
    return parseInt(num.join(''));
};

var indexOf = function(arr,target,start){
    for(let i=arr.length-1;i>=start;i--){
        if(arr[i]===target)return i;
    }
    return -1;
}
