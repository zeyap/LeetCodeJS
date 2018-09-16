/**
 * Initialize your data structure here.
 */
var RandomizedSet = function() {
    this.index = {};
    this.data={};
    this.length = 0;
};

/**
 * Inserts a value to the set. Returns true if the set did not already contain the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    if(this.index[val]!==undefined) return false;
    let idx = this.length;
    this.index[val]=idx;
    this.data[idx] = val;
    this.length++;
    return true;
};

/**
 * Removes a value from the set. Returns true if the set contained the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    if(this.index[val]!==undefined){
        let lastIdx = this.length-1;
        
        //exchange target with last & delete target
        let tempIdx = this.index[val];
        let lastData = this.data[lastIdx]
        this.index[lastData] = tempIdx;
        this.data[tempIdx] = lastData;
        
        delete this.index[val];
        delete this.data[lastIdx];
        this.length--;
        return true;
    }
    return false;
};

/**
 * Get a random element from the set.
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    let ran = Math.floor(Math.random()*this.length);
    return this.data[ran];
};