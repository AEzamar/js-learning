function solve(arr) {
    const positiveArr = arr.filter(item => item > 0).sort((a, b) => a - b);
    const negativeArr = arr.filter(item => item < 0).sort((a, b) => b - a);
    for(let i = 0; i < arr.length; i++) {
        if(positiveArr.length > negativeArr.length) {
            if(-Math.abs(positiveArr[i]) !== negativeArr[i]) return positiveArr[i];
        }else {
            if(Math.abs(negativeArr[i]) !== positiveArr[i]) return negativeArr[i];
        };
    }
}

console.log(solve1([1, -1, 2, -2, 3]));
console.log(solve1([1, 3, 2, -1, -3]));
console.log(solve1([-3, 1, 2, 3, -1, -4, -2]));
console.log(solve1([1, -1, 2, -2, 3, 3]));