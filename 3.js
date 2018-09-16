var lengthOfLongestSubstring = function(s) {
    if(s.length<=1)return s.length;
    var head=0, rear=0;
    var h=[];//map value to pos
    var maxLen=0;
    while(head<=s.length-1&&rear<=s.length-1){
        if(h[s[rear]]>=head){
            head=h[s[rear]]+1;
        }
        h[s[rear]]=rear;
        if(rear-head+1>maxLen){
            maxLen=rear-head+1;
        }
        rear++;
    }
    return maxLen;
};


var lengthOfLongestSubstring = function(s) {
    let map = {};
    let start = 0;
    let maxLen = 0, currLen =0;
    for(let i=0;i<s.length;i++){
        if(map[s[i]]!==undefined){
            let prevStart = start;
            start = map[s[i]]+1;
            for(let j=map[s[i]];j>=prevStart;j--){
                delete map[s[j]];
                currLen--;
            }
        }
        map[s[i]] = i;
        currLen++;
        // console.log(currLen,map,start)
        if(currLen>maxLen)maxLen=currLen;
    }
    return maxLen;
};
