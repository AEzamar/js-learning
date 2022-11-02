function multiplyArr(arr) {
    for(let i = 0; i < arr.length; i++) {

    }
}

function solve(arr) {
    let maxProduct = 0;
    const spreadArr = arr.reduce((total, curr) => total.concat(curr));
    console.log(arr.reduce((total, curr) => total + curr));
    console.log(spreadArr);
    return arr.map(subArr => subArr.reduce((total, curr) => total * curr, 0));
    //return maxProduct;
};

console.log(solve([[1, 2],[3, 4]]));