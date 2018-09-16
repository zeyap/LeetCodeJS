var trap = function(height) {
    let l = 0, r=height.length-1
    let lmax=0, rmax=0;
    let res = 0;
    while(l<=r){
        lmax = height[l];
        rmax = height[r];
        if(lmax<=rmax){
            while(height[l]<=lmax&&l<=r){
                res+=lmax-height[l];
                l++;
            }
            lmax = height[l];
        }else{
            while(height[r]<=rmax&&l<=r){
                res+=rmax-height[r];
                r--;
            }
            rmax = height[r];
        }
    }
    return res;
};
