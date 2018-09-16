var isPalindrome = function(x) {
    let original = x;
    let half = 0;
    if(original===0)return true;
    if(original%10===0||original<0)return false;
    while(original>half){
        let rear = original%10;
        original=parseInt(original/10);
        half=half*10+rear;
    }
    if(original===half||original===parseInt(half/10)){
        return true;
    }
    return false;
};

