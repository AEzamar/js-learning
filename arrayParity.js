function solve(arr){
    const copyArr = [...arr];
    let noParity = 0;
    let parityIndex = 0;
    for(let i = 0; i < copyArr.length; i++) {
        if(copyArr[parityIndex] > 0) {
            if copyArr[i] !== -Math.abs(copyArr[parityIndex]) noParity = copyArr[parityIndex];
        }else if(copyArr[parityIndex] < 0) {
            if copyArr[i] !== Math.abs(copyArr[parityIndex]) noParity = copyArr[parityIndex];
        }
        parityIndex++;
    };
    return noParity;
};

console.log(solve([1, -1, 2, -2, 3]))