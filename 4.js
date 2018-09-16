var findMedianSortedArrays = function(nums1, nums2) {
    let half = (nums1.length+nums2.length)/2;
    let m = [];
    let target;
    if(Math.floor(half)===half){
        m.push(half);
        m.push(half+1);
    }else{
        m.push(Math.floor(half)+1);
    }
    let p1=0,p2=0;
    let cnt=0;
    while(p1<nums1.length||p2<nums2.length){
        cnt++;
        if(p1<nums1.length&&p2<nums2.length){
            if(nums1[p1]<=nums2[p2]){
                if(cnt===m[0]){
                    target = m.length>1?nums1[p1]+Math.min(nums1[p1+1]||Number.MAX_VALUE,nums2[p2]):2*nums1[p1];
                    break;
                }
                p1++;
            }else{
                if(cnt===m[0]){
                    target = m.length>1?nums2[p2]+Math.min(nums2[p2+1]||Number.MAX_VALUE,nums1[p1]):2*nums2[p2];
                    break;
                }
                p2++;
            }
        }else if(p1<nums1.length){
            if(cnt===m[0]){
                target = m.length>1?nums1[p1]+nums1[p1+1]:2*nums1[p1];
                break;
            }
            p1++;
        }else{
            if(cnt===m[0]){
                target = m.length>1?nums2[p2]+nums2[p2+1]:2*nums2[p2];
                break;
            }
            p2++;
        }
    }
    return target/2
};
