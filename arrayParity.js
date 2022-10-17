function solve(arr) {
    let noParity = 0;
    const copyArr = [...arr];
    const positiveArr = arr.filter(ele => ele > 0).sort((a, b) => a - b);
    const negativeArr = arr.filter(ele => ele < 0).sort((a, b) => a - b);
    if(positiveArr.length > negativeArr.length) noParity = positiveArr[-1];
    else noParity = negativeArr[-1];
    return noParity;
};

console.log(solve([1, -1, 2, -2, 3]));
console.log(solve([1, 3, 2, -1, -3]));
console.log(solve([-3, 1, 2, 3, -1, -4, -2]));
console.log(solve([1, -1, 2, -2, 3, 3]));