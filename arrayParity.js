function solve(arr) {
    let noParity = 0;
    const copyArr = [...arr];
    const positiveArr = arr.filter(ele => ele > 0).sort((a, b) => a - b);
    //console.log(positiveArr);
    const negativeArr = arr.filter(ele => ele < 0).sort((a, b) => b - a);
    //console.log(negativeArr);
    const dynamicLen = positiveArr.length > negativeArr.length || negativeArr.length > positiveArr.length; 
    for(let i = 0; i < dynamicLen; i++) {
        if(positiveArr[i] !== Math.abs(negativeArr[i])) noParity = positiveArr[i];
        else if(negativeArr[i] !== -Math.abs(positiveArr[i])) noParity = negativeArr[i];
    }
    /*if(positiveArr.length > negativeArr.length) noParity = positiveArr[positiveArr.length - 1];
    else if(negativeArr.length > positiveArr.length) noParity = negativeArr[negativeArr.length - 1];*/
    return noParity;
};

/*console.log(solve([1, -1, 2, -2, 3]));
console.log(solve([1, 3, 2, -1, -3]));
console.log(solve([-3, 1, 2, 3, -1, -4, -2]));
console.log(solve([1, -1, 2, -2, 3, 3]));*/

function solve1(arr) {
    const sortedArr = arr.sort((a, b) => a - b);
}