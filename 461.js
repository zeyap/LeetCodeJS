var hammingDistance = function(x, y) {
    var xbin = x.toString(2);
    var ybin = y.toString(2);
    var len = Math.max(xbin.length,ybin.length);
    xbin = xbin.padStart(len,'0');
    ybin = ybin.padStart(len,'0');
    var hamming=0;
    for(var i=0;i<len;i++){
        hamming+=(xbin[i]===ybin[i])?0:1;
    }
    return hamming;
};