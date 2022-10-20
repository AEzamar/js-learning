function zeroPlentiful(arr) {
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
            zeroCount = 0;
            sequenceCount = 0;
        }
        return outerCount > 0 ? sequenceCount = outerCount : sequenceCount;
    }
};

console.log(zeroPlentiful([3]));
console.log(zeroPlentiful([0,0,0,0,0,0]));
console.log(zeroPlentiful([1,0,0,0,0,5,4,0,0,0,0,0]))