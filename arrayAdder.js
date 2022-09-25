function arrAdder(arr) {
	let arrStr = " "
	for(let i = 0; i < arr.length(); i++) {
		for(let j = 0; j < arr[i].length; j++) {
			arrStr += arr[j][i]
		}
	}
	return arrStr
}