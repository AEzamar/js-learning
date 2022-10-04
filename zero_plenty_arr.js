function zero_plentiful(arr):
    let zeroCount = 0, sequenceCount = 0, outerCount = 0;
    for(let i = 0; i <= arr.length; i++) {
        if(arr[i] === 0) {
            zeroCount++;
            if(zeroCount >= 4) sequenceCount++
        }  
};