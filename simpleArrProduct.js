function multiplyArr(arr) {
    for(let i = 0; i < arr.length; i++) {

    }
}

function solve(arr) {
    for(let i = 0; i < arr.length; i++) {
        //console.log(arr[i][i] * arr[i + 1][i])
    }
    let maxProduct = 0;
    const spreadArr = arr.reduce((total, curr) => total.concat(curr));
    console.log(spreadArr);
    return arr.map(subArr => subArr.reduce((total, curr) => total * curr, 0));
    //return maxProduct;
};

//console.log(solve([[1, 2],[3, 4]]));

function solve1(arr) {
    const spreadArr = arr.reduce((total, curr) => total.concat(curr));
    const productArr = [];
    /*while(arr.length) {
        arr.map(subArr => productArr.push(subArr.shift()));
        arr.map(subArr => productArr.push(subArr.pop()))
    }*/
    //const multiplyArr = productArr.reduce((total, curr) => total * curr);
    //console.log(multiplyArr);
    return productArr;
}

console.log(solve1([[1, 2],[3, 4]]));