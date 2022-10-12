function solve(arr){
    const copyArr = [...arr];
    let noParity = 0;
    for(let i = 0; i < copyArr.length; i++) {
        let first = copyArr.shift();
        if(first > 0) {
            if copyArr !== -Math.abs(first) noParity = first;
        }else if(first < 0) {
            if copyArr !== Math.abs(first) noParity = first;
        };
    };
};

console.log(solve([1, -1, 2, -2, 3]))