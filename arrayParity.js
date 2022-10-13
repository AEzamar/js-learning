function solve(arr) {
    const copyArr = [...arr];
    let noParity = 0;
    let j = 0;
    for(let i = 0; i < copyArr.length; i++) {
        if(copyArr[j] !== copyArr[i]) noParity = copyArr[j];
        else {
            if(copyArr[j] > 0 && copyArr[j] !== -Math.abs(copyArr[i])) noParity = copyArr[j]
            else if(copyArr[j] < 0 && copyArr[j] !== Math.abs(copyArr[i])) noParity = copyArr[j]
        }
        j++;
    };
    return noParity;
};

console.log(solve([1, -1, 2, -2, 3]));
console.log(solve([-3, 1, 2, 3, -1, -4, -2]));
console.log(solve([1, -1, 2, -2, 3, 3]));