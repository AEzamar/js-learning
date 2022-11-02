function solve(arr) {
    let maxProduct = 0;
    for(let i = 0; i <= arr.length; i++) {
        for(let j = 0; j < arr[i].length; j++) {
            maxProduct += arr[j].reduce((total, curr) => total * curr, 0);
        }
    }
    return maxProduct;
}

console.log(solve([[1, 2],[3, 4]]));