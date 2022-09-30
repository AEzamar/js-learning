function dnaToRNA(dna) {
	let rna;
	for(let acid of dna) {
		rna = dna.replace(/T/g, 'U');
	}
	return dna === "" ? "" : rna; 
}

console.log(dnaToRNA('GCAT'));
console.log(dnaToRNA('TTTT'));