function solve(arr){
    const copyArr = [...arr];
    let noParity = 0;
    let parityIndex = 0;
    for(let i = 0; i < copyArr.length; i++) {
        for(let j = 0; j < copyArr.length; j++) {
            //if copyArr[j] > 0 && copyArr[j] !== -Math.abs(copyArr[j]) noParity = copyArr[j];
        }
    };
    return noParity;
};

console.log(solve([1, -1, 2, -2, 3]));
console.log(solve([-3, 1, 2, 3, -1, -4, -2]));
console.log(solve([1, -1, 2, -2, 3, 3]));