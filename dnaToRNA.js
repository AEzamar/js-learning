function DNAtoRNA(dna) {
	for(let char in dna){
		if(char === "T" ) dna.replace(char, "U")
	}
	return dna; 
}