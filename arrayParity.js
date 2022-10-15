function solve(arr) {
    const copyArr = [...arr];
    let noParity = 0;
    const positiveArr = copyArr.filter(item => item > 0).sort((a, b) => a - b);
    const negativeArr = copyArr.filter(item => item < 0).sort((a, b) => a - b);
    const positiveFilter = positiveArr.filter((_, i, arrPosi) => -Math.abs(arrPosi[i]) !== negativeArr[i]);
    console.log(positiveFilter);
    const dynamicLen = positiveArr.length > negativeArr.length ? positiveArr.length : negativeArr.length;
    //console.log('Positive', positiveArr);
    //console.log('Negative', negativeArr);
    for(let i = 0; i < arr; i++) {
        if(positiveArr[i] !== negativeArr[i]) {
            noParity = positiveArr[i];
        }else if(negativeArr[i] !== positiveArr[i]){
            noParity = negativeArr[i];
        }
    }    
    return noParity;
};

console.log(solve([1, -1, 2, -2, 3]));
console.log(solve([1, 3, 2, -1, -3]));
console.log(solve([-3, 1, 2, 3, -1, -4, -2]));
console.log(solve([1, -1, 2, -2, 3, 3]));