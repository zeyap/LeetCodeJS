var mostCommonWord = function(paragraph, banned) {
    let bannedMap={};
    banned.forEach((bannedWord)=>{
        bannedMap[bannedWord]=true;
    })
    paragraph+=' ';
    let wordBag = paragraph.split(/[!?',;.]*\s/);
    let map = {};
    wordBag.forEach((word,id)=>{
        let lowercase = word.toLowerCase();
        if(bannedMap[lowercase]===true)return;
        map[lowercase] = map[lowercase]||0;
        map[lowercase]++;
    });
    // console.log(wordBag,map)
    let max = -1;
    let maxWord = '';
    for(let word in map){
        if(map[word]>max){
            max = map[word];
            maxWord = word;
        }
    }
    return maxWord;
};
