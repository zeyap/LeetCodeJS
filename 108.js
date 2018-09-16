var sortedArrayToBST = function(nums) {
    if(nums.length===0)return null;
    return builder(nums,0, nums.length-1);
};

var builder = function(nums,lo,hi){
    if(lo>hi)return null;
    let mid = parseInt((lo+hi)/2);
    let root=new TreeNode(nums[mid]);
    root.val = nums[mid];
    root.left=builder(nums,lo,mid-1);
    root.right = builder(nums,mid+1,hi);
    return root;
}
