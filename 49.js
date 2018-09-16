var groupAnagrams = function(strs) {
    let prime = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103];
    let map={};
    strs.forEach((str)=>{
        let code = 1;
        str.split('').forEach((l)=>{
            code*=prime[l.charCodeAt()-97];
        })
        if(map[code]===undefined)map[code]=[];
        map[code].push(str);
    });
    let ret = [];
    for(code in map){
        ret.push(map[code]);
    }
    return ret;
};