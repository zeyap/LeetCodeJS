var merge = function(intervals) {
    intervals.sort((a,b)=>a.start-b.start);
    let merged=[];//an array of Interval
    intervals.forEach((interval)=>{
        if(merged.length>0 && merged[merged.length-1].end>=interval.start){
            if(interval.end>merged[merged.length-1].end){
                merged[merged.length-1].end = interval.end;
            }
        }else{
            merged.push(interval);
        }
        
    });
    return merged;
};
