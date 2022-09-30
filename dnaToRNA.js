function dnaToRNA(dna) {
	for(let char in dna){
		if(char === "T" ) dna.replace(char, "U");
	}
	return dna; 
}

console.log(dnaToRNA('GCAT'));
console.log(dnaToRNA('TTTT'));