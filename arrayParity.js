function solve(arr) {
    const copyArr = [...arr];
    //let i = 0
    let noParity;
    const positiveArr = copyArr.filter(item => item > 0);
    const negativeArr = copyArr.filter(item => item < 0);
    const dynamicLen = positiveArr.length > negativeArr.length || negativeArr.length > positiveArr.length;
    for(let i = 0; i < copyArr.length; i++) {
        positiveArr[i] !== negativeArr
    }
    //let noParity = copyArr.filter(item => item !== -Math.abs(item));
    //let noParity = !copyArr.includes(item => item !== -Math.abs(item) || item !== Math.abs(item));    
    return noParity;
};

console.log(solve([1, -1, 2, -2, 3]));
console.log(solve([-3, 1, 2, 3, -1, -4, -2]));
console.log(solve([1, -1, 2, -2, 3, 3]));