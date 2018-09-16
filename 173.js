var BSTIterator = function(root) {
    let curr = root;
    this.stk=[];
    this.pushAllLeftNodes(curr);
};


/**
 * @this BSTIterator
 * @returns {boolean} - whether we have a next smallest number
 */
BSTIterator.prototype.hasNext = function() {
    return this.stk.length>0;
};

/**
 * @this BSTIterator
 * @returns {number} - the next smallest number
 */
BSTIterator.prototype.next = function() {
    let curr = this.stk.pop();
    let ret = curr.val;
    this.pushAllLeftNodes(curr.right);
    return ret;
};

BSTIterator.prototype.pushAllLeftNodes = function(curr){
    while(curr){
        this.stk.push(curr);
        curr = curr.left;
    }
}
