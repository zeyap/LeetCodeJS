/*
Horizontal scanning
Vertical scanning
Time: O(S), space: O(1) //s: sum of all characters in all strings
*/

var longestCommonPrefix = function(strs) {
    var prefix=[];
    if(strs.length===0){
        return '';
    }
    for(var i=0;i<strs[0].length;i++){
        if(strs.every(function(item){
            if(strs[0][i]===item[i]){
                return true;
            }else{
                return false;
            }
        })){
            prefix.push(strs[0][i]);
        }else{
            break;
        }
    }
    return prefix.join('');
};

/*
Divide and conquer
Time: O(s), //S is the number of all characters in the array, S = m*nS=m∗n
space: O(m*log(n))

Binary search

Each time search space is divided in two equal parts, one of them is discarded, because it is sure that it doesn't contain the solution. 
*/

var longestCommonPrefix = function(strs) {
    if(strs.length===0||strs===null)return "";
    let lo = 0, hi = strs.length-1;
    let ans = -1;
    while(lo<=hi){
        let mid = parseInt((lo+hi)/2);
        if(isCommonSubstring(strs,0,mid)){
            ans = mid;
            lo = mid+1;
        }else{
            hi = mid-1;
        }
    }
    return strs[0].slice(0,ans+1);
};

var isCommonSubstring = function(strs, lo,hi){
    return strs.every((str)=>{
        for(let j=lo;j<=hi;j++){
            if(str[j]!==strs[0][j]){
                return false;
            }
        }
        return true;
    })
};

