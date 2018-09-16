var isPowerOfTwo = function(n) {
    return 1===n.toString(2).split('').reduce((accum,elem)=>accum+parseInt(elem),0)
};


var isPowerOfTwo = function(n) {
    return n > 0 && !(n & (n - 1));
};

