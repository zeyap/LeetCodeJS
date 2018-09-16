/*
Check each bits
*/

var hammingWeight = function(n) {
    let count = 0, mask=1;
    for(let i=0;i<32;i++){
        console.log(n,mask,n&mask)
        count+=(n&mask)?1:0;
        mask<<=1;
    }
    return count;
};

/*
Bit Manipulation Trick
*/

var hammingWeight = function(n) {
    let count = 0;
    while(n){
        count++;
        n&=(n-1);
    }
    return count;
};