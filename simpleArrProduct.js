function multiplyArr(arr) {
    let i = 0;
    let maxProduct = 1;
    while(arr[i].length) {
        maxProduct += arr[i].shift() * arr[i].pop();
        i++;
    }
    return maxProduct;
}

function solve(arr) {
    let maxProduct = 0;
    for(let i = 0; i < arr.length; i++) {
        maxProduct += multiplyArr(arr[i]);
        //console.log(arr[i][i] * arr[i + 1][i])
    }
    /*const spreadArr = arr.reduce((total, curr) => total.concat(curr));
    console.log(spreadArr);
    return arr.map(subArr => subArr.reduce((total, curr) => total * curr, 0));*/
    return maxProduct;
};

console.log(solve([[1, 2],[3, 4]]));