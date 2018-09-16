var nthSuperUglyNumber = function(n, primes) {
    let number = [1];
    let index = [];
    let k=[1];
    for(let i=0;i<primes.length;i++){
        index[i]=0;
    }
    for(let i=1;i<n;i++){
        let min = Number.MAX_VALUE;
        let minId = [];
        for(let j=0;j<primes.length;j++){
            let next = k[index[j]]*primes[j];
            if(next<min){
                min = next;
                minId = [j];
            }else if(next===min){
                minId.push(j);
            }
        }
        k[i] = min;
        minId.forEach((id)=>{
            index[id]++;
        });
    }
    return k[n-1];
};
