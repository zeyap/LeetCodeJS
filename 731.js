var MyCalendarTwo = function() {
    this.records = [];
    this.overlaps = [];
};

/** 
 * @param {number} start 
 * @param {number} end
 * @return {boolean}
 */
MyCalendarTwo.prototype.book = function(start, end) {
    for(let i=0;i<this.overlaps.length;i++){
        let l = Math.max(start,this.overlaps[i][0]), r = Math.min(end,this.overlaps[i][1]);
        if(l<r){//overlap
            return false;
        }
    }
    for(let i=0;i<this.records.length;i++){
        let l = Math.max(start,this.records[i][0]), r = Math.min(end,this.records[i][1]);
        if(l<r){//overlap
            this.overlaps.push([l,r]);
        }
    }
    this.records.push([start,end]);
    return true;
};
