var convert = function(s, numRows) {
    var rows=[];
    var unit = numRows===1?1:(numRows-1)*2;
    for(var i=0;i<s.length;i++){
        var posInUnit = i%unit;
        var row = posInUnit<=numRows-1?posInUnit:(unit-posInUnit);
        if(rows[row]===undefined){
           rows[row]='';
        }
        rows[row]=rows[row].concat(s[i]);
    }
    var res='';
    rows.forEach(function(elem){
        res=res.concat(elem);
    });
    return res;
};
