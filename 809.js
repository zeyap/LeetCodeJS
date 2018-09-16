var expressiveWords = function(S, words) {
    // S="dddiiiinnssssssoooo"
    // words = ["dinnssoo","ddinso","ddiinnso","ddiinnssoo","ddiinso","dinsoo","ddiinsso","dinssoo","dinso"]
    //Output:1, Expected:3
    var mapWord = function(S){
        let map = [];
        let curr=S[0], cnt=1;
        for(let i=0;i<S.length;i++){
            if(S[i]===S[i+1]){
                cnt++;
            }else{
                map.push({
                    val:curr,
                    cnt
                });
                curr = S[i+1];
                cnt =1;
            }
        }
        return map;
    }
    
    let ans = 0;
    let smap = mapWord(S);
    for(let i=0;i<words.length;i++){
        let wmap = mapWord(words[i]);
        if(smap.every((item,j)=>{
            console.log(wmap[j],item)
            return wmap[j]&&wmap[j].val===item.val&&(item.cnt-wmap[j].cnt>=2||wmap[j].cnt===item.cnt);
        }))ans++;
    }
    return ans;
};
