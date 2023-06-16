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
	let solution=[];
	function solve(currentIndex, calculateString) {
		if(input.length <=currentIndex){
			solution.push(calculateString);
			return;
		}
		let currentIndex=input[currentIndex]
		for(let i=0; i<table[currentChar]).length;
		solve(currentIndex+1, calculateString+table[currentChar])
		
	}
}

solve(0, "")
return solutions;


module.exports = letterCombinations;