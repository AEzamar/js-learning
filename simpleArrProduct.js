function solve(arr) {
    let maxProduct = 0;
    for(let i = 0; i <= arr.length; i++) {
        arr[i].reduce((total, curr) => total * curr, 0);
    }
    return maxProduct;
}

console.log(solve([[1, 2],[3, 4]]));