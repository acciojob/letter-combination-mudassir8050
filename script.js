function letterCombinations(input) {
  //Complete the function
	let table ={
		"2" : "abc",
		"3" : "def",
		"4": "ghi",
		"5": "jkl",
		"6": "mno",
		"7":"prqs",
		"8":"tuv",
		"9":"wxyz"
		
	}
	let solution= [];
	function solve(currentIndex, calculatedString) {
		if(input.length <=currentIndex){
			solutions.push(calculatedString);
			return;
		}
		let currentChar=input[currentIndex]
		for(let i=0; i<table[currentChar]).length; i++){
		solve(currentIndex+1, calculatedString+table[currentChar])
		
	}
}

solve(0, "")
return solutions;
}


module.exports = letterCombinations;