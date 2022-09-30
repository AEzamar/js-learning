function dnaToRNA(dna) {
	let rna;
	for(let acid of dna) {
		if(acid === 'T') rna = dna.replaceAll(acid, 'U');
	}
	return rna; 
}

console.log(dnaToRNA('GCAT'));
console.log(dnaToRNA('TTTT'));