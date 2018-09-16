var invertTree = function(root) {
    var invert = function(root){
        if(root===null)return root;
        var r = root.right;
        root.right = root.left;
        root.left = r;
        invert(root.left);
        invert(root.right);
    }
    invert(root);
    return root;
};
