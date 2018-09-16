var getRow = function(rowIndex) {
    let row = [];
    for(let i=0;i<=rowIndex;i++){
        let curr = [];
        let rear= Math.floor(i/2);
        let prevRear = i%2===0?rear-1:rear;
        for(let j=0;j<=rear;j++){
            if(j===0)curr[j]=1;
            else if(j<=prevRear){
                curr[j] = row[j-1]+row[j];
            }else{
                curr[j] = row[prevRear]*2;
            }
        }
        row = curr;
        curr = [];
    }
    let rev=[];
    for(let i=row.length-1;i>=0;i--){
        rev[row.length-1-i] = row[i];
    }
    return rowIndex%2===0?row.concat(rev.slice(1)):row.concat(rev);
};
