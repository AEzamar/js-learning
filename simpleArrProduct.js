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
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr[i].length; j++) {
            console.log('First arr:', arr[j][i], 'Second arr');
            //console.log(arr[i][i] * arr[j][j]);
        }
    }
}

console.log(solve1([[1, 2],[3, 4]]));