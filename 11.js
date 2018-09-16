
var maxArea = function(height) {
    var maxar=0;
    var head=0,tail=height.length-1;
    var h,area;
    while(head<tail){
        area = Math.min(height[head],height[tail])*(tail-head);
        if(area>maxar){
            maxar = area;
        }
        h = Math.min(height[head],height[tail]);
        while(height[head]<=h)head++;
        while(height[tail]<=h)tail--;
    }
    
    return maxar;
};

//========fastest======

var maxArea = function(height) {
    var maxar=0;
    var head=0,tail=height.length-1;
    var h,area;
    while(head<tail){
        maxar=Math.max(maxar,Math.min(height[head],height[tail])*(tail-head));
        if(height[head]<height[tail]){head++;}
        else{tail--;}
    }
    
    return maxar;
};