function solve(arr) {
    const copyArr = [...arr];
    let i = 0
    let noParity = copyArr.filter(item => item !== -Math.abs(item))    
    return noParity;
};

console.log(solve([1, -1, 2, -2, 3]));
console.log(solve([-3, 1, 2, 3, -1, -4, -2]));
console.log(solve([1, -1, 2, -2, 3, 3]));