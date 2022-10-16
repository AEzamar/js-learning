function solve(arr) {
    const copyArr = [...arr];
    let noParity;
    /*const positiveArr = copyArr.filter(item => item > 0).sort((a, b) => a - b);
    const negativeArr = copyArr.filter(item => item < 0).sort((a, b) => a - b);
    const positiveFilter = positiveArr.filter((_, i, arrPosi) => -Math.abs(arrPosi[i]) !== negativeArr[i]);
    const negativeFilter = negativeArr.filter((_, i, arrNega) => Math.abs(arrNega[i]) !== positiveArr[i])
    console.log('Positive filter:', positiveFilter);
    console.log('Negative filter:', negativeFilter);
    const positiveMap = positiveArr.map(function(_, i, arrPo) {
        if (-Math.abs(arrPo[i]) !== negativeArr[i])
            return arrPo[i];
    });
    console.log('Positive Map', positiveMap);
    const dynamicLen = positiveArr.length > negativeArr.length ? positiveArr.length : negativeArr.length;
    for(let i = 0; i < arr; i++) {
        if(positiveArr[i] !== negativeArr[i]) {
            noParity = positiveArr[i];
        }else if(negativeArr[i] !== positiveArr[i]){
            noParity = negativeArr[i];
        }
    }  */
    let outerIndexer = 0;
    for(let i = 0; i < arr.length; i++) {
        arr.forEach(function(_, i) {
            if(copyArr[outerIndexer] !== arr[i]) noParity = copyArr[outerIndexer];
        });
        outerIndexer++;
    };  
    return noParity;
};

console.log(solve([1, -1, 2, -2, 3]));
console.log(solve([1, 3, 2, -1, -3]));
console.log(solve([-3, 1, 2, 3, -1, -4, -2]));
console.log(solve([1, -1, 2, -2, 3, 3]));