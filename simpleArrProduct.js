function solve(arr) {
    let maxProduct = 0;
    //console.log(...arr);
    const [...spreadArr] = [...arr];
    console.log(spreadArr);
    for(let i = 0; i <= spreadArr.length; i++) {
        arr.reduce((total, curr) => total * curr, 0);
    }
    return maxProduct;
}

console.log(solve([[1, 2],[3, 4]]));