function arrAdder(arr) {
	let arrStr = " "
	for(let i = 0; i < arr.length; i++) {
		arrStr += ' '
		for(let j = 0; j < arr[i].length; j++) {
			if (arr[j][i] !== undefined) arrStr += arr[j][i]
		}
	}
	return arrStr.trim()
}

console.log(arrAdder([
['J','L','L','M']
,['u','i','i','a']
,['s','v','f','n']
,['t','e','e','']]))

console.log(arrAdder([ 
  [ 'T', 'M', 'i', 't', 'p', 'o', 't', 'c' ],
  [ 'h', 'i', 's', 'h', 'o', 'f', 'h', 'e' ],
  [ 'e', 't', '', 'e', 'w', '', 'e', 'l' ],
  [ '', 'o', '', '', 'e', '', '', 'l' ],
  [ '', 'c', '', '', 'r', '', '', '' ],
  [ '', 'h', '', '', 'h', '', '', '' ],
  [ '', 'o', '', '', 'o', '', '', '' ],
  [ '', 'n', '', '', 'u', '', '', '' ],
  [ '', 'd', '', '', 's', '', '', '' ],
  [ '', 'r', '', '', 'e', '', '', '' ],
  [ '', 'i', '', '', '', '', '', '' ],
  [ '', 'a', '', '', '', '', '', '' ] ]))