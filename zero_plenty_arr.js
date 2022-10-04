function zero_plentiful(arr):
    if(arr.every(num => num === 0)) return 1;
    if(!arr.includes(0)) return 0;
    let zeroCount = 0, sequenceCount = 0, outerCount = 0;
    for(let i = 0; i <= arr.length; i++) {
        if(arr[i] === 0) {
            zeroCount++;
            if(zeroCount >= 4) {
                sequenceCount++;
                outerCount++;
            }
        }else {
            sequenceCount = 0;
        }
    return outerCount > 1 ? sequenceCount = outerCount : sequenceCount;
};