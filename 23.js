var mergeKLists = function(lists) {
    let p=[];
    let resArr = [];
    for(let i=0;i<lists.length;i++){
        if(lists[i]){
            p.push(lists[i]);
        }
    }
    while(p.length>0){
        let min = Infinity, minpid = -1;
        for(let i=0;i<p.length;i++){
            if(p[i].val<min){
                min = p[i].val;
                minpid = i;
            }
        }
        resArr.push(min);
        p[minpid] = p[minpid].next;
        if(p[minpid]===null)p.splice(minpid,1);
    }
    if(resArr.length===0)return null;
    let res = new ListNode(resArr[0]);
    let curr = res;
    for(let i=1;i<resArr.length;i++){
        curr.next = new ListNode(resArr[i]);
        curr = curr.next;
    }
    return res;
};
