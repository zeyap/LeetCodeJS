var validSquare = function(p1, p2, p3, p4) {
    let p = [p1,p2,p3,p4];
    p.sort((a,b)=>(a[0]-b[0]===0)?a[1]-b[1]:a[0]-b[0]);
    let e1 = [p[2][0]-p[0][0],p[2][1]-p[0][1]], e2 = [p[1][0]-p[0][0],p[1][1]-p[0][1]];
    let len1 = e1[0]*e1[0]+e1[1]*e1[1], len2 = e2[0]*e2[0]+e2[1]*e2[1];
    if(len1!==len2||len2===0||len1===0) return false;
    let diag = [e1[0]+e2[0],e1[1]+e2[1]];
    return e1[0]*e2[0]+e1[1]*e2[1]===0 && p[0][0]+diag[0]===p[3][0]&&p[0][1]+diag[1]===p[3][1];
};
