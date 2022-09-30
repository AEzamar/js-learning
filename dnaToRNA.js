function dnaToRNA(dna) {
	const rna = dna.replace(/T/g, 'U');
	return dna === "" ? "" : rna; 
}

console.log(dnaToRNA('GCAT'));
console.log(dnaToRNA('TTTT'));