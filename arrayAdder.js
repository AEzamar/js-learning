function arrAdder(arr) {
	let arrStr = " "
	for(let i = 0; i < arr.length; i++) {
		arrStr += ' '
		for(let j = 0; j < arr[i].length; j++) {
			arrStr += arr[j][i]
			if (arr[j][i] === "") arrStr += " "
		}
	}
	return arrStr.trim()
}

console.log(arrAdder([
['J','L','L','M']
,['u','i','i','a']
,['s','v','f','n']
,['t','e','e','']]))