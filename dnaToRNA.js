function DNAtoRNA(dna) {
	const rna = dna.replace(/T/g, 'U');
	return dna === "" ? "" : rna; 
};

console.log(DNAtoRNA('GCAT'));
console.log(DNAtoRNA('TTTT'));
console.log(DNAtoRNA('"GACCGCCGCC"'));