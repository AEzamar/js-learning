function solve(arr){
    const copyArr = [...arr];
    let noParity;
    let parityIndex = 0;
    for(let i = 0; i < copyArr.length; i++) {
        noParity = 0;
        if(copyArr[i] > 0 && copyArr[i] !== -Math.abs(copyArr[i])) noParity = copyArr[i];
        else if(copyArr[i] < 0 && copyArr[i] !== Math.abs(copyArr[i])) noParity = copyArr[i];
        //console.log(copyArr[parityIndex])
        /*if(copyArr[parityIndex] > 0) {
            if copyArr[i] !== -Math.abs(copyArr[parityIndex]) noParity = copyArr[parityIndex];
        }else if(copyArr[parityIndex] < 0) {
            if copyArr[i] !== Math.abs(copyArr[parityIndex]) noParity = copyArr[parityIndex];
        }*/
        parityIndex++;
    };
    return noParity;
};

console.log(solve([1, -1, 2, -2, 3]));
console.log(solve([-3, 1, 2, 3, -1, -4, -2]));
console.log(solve([1, -1, 2, -2, 3, 3]));