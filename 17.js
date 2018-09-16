var letterCombinations = function(digits) {
    if(digits.length===0)return [];
    let map = [[],[],['a','b','c'],['d','e','f'],['g','h','i'],['j','k','l'],['m','n','o'],
                     ['p','q','r','s'],['t','u','v'],['w','x','y','z']];
    let ans = [''];
    digits.split('').forEach((d)=>{
        let num = parseInt(d);
        let dAns = [];
        map[num].forEach((letter)=>{
            let temp = [...ans];
            for(let i=0;i<temp.length;i++){
                temp[i]+=letter;
            }
            dAns = dAns.concat(temp);
        })
        ans = dAns;
    })
    return ans;
};
