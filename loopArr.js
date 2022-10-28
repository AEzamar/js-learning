//removing from end and adding them to start one by-one (if direction is "right")
//removing elements from start and adding them to end of array one-by-one (if direction is "left")
function loopArr(arr, direction, steps) {
	const outputArr = [];
	const rightLoop = arr.splice(0,)
	if(direction.toLowerCase() === 'left') {
		for(let i = 0; i < arr.length; i++) {
			outputArr.push(arr.splice(steps, steps + 1, 1));
		}
	}
	return outputArr;
}

console.log(loopArr([1, 5, 87, 45, 8, 8], "left", 2));