function multiplyArr(arr) {
    let i = 0;
    while(arr[i].length) {
        arr[i].shift();
        i++;
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