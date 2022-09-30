function arrAdder(arr) {
	let arrStr = " ";
	for(let i = 0; i < arr[0].length; i++) {
		for(let j = 0; j < arr.length; j++) {
			arrStr += arr[j][i];
		}
		arrStr += ' ';
	}
	return arrStr.trim();
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

//User submitted solution
/*const arrAdder = (arr) => {
  return arr[0]
    .map((el, i) => arr.map((el, j) => arr[j][i]).join(""))
    .join(" ");
};*/