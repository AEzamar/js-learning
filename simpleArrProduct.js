function solve(arr) {
    let maxProduct = 0;
    return arr.map(subArr => subArr.reduce((total, curr) => total + curr, 0));
    //return maxProduct;
}

console.log(solve([[1, 2],[3, 4]]));