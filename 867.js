var primePalindrome = function(N) {
    if (8 <= N && N <= 11) return 11;
    for(let x= 1; x<100000;x++){
        let str = x.toString();
        let rev = str.split('').reverse().join('').slice(1); //all even palindromes has a factor 11, not prime
        let y = parseInt(str+rev);
        if(y>=N&&isPrime(y))return y;
    }
    return -1;
};

var isPrime = function(n){
    if(n<=2||n%2===0)return n===2;
    for(let factor=3;factor*factor<=n;factor+=2){
        if(n%factor===0)return false;
    }
    return true;
}
