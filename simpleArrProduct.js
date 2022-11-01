function solve(arr) {
    let maxProduct = 0;
    for(let i = 0; i < arr.length; i++) {
        maxProduct += arr[i].reduce((total, curr) total * curr, 0);
    }
    return maxProduct;
}

console.log(solve())