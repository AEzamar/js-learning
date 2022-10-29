//removing from end and adding them to start one by-one (if direction is "right")
//removing elements from start and adding them to end of array one-by-one (if direction is "left")
function loopArr(arr, direction, steps) {
	const outputArr = [];
	const copyArr = [...arr];
	if(direction.toLowerCase() === 'left') {
		for(let i = 0; i <= copyArr.length; i++) {
			outputArr.push(...copyArr.splice(steps, 1));
		};
		if(copyArr.length) outputArr.push(...copyArr.slice(0, copyArr.length));
	}else if(direction.toLowerCase() === "right") {
		for(let j = copyArr.length; j >= 0; j--) {
			outputArr.unshift(...copyArr.splice((copyArr.length - 1) - steps, 1));
		};
	};
	return outputArr;
};

console.log(loopArr([1, 5, 87, 45, 8, 8], "left", 2));
console.log(loopArr([1, 5, 87, 45, 8, 8], "right", 2));