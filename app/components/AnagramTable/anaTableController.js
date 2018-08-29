var anaTable = angular.module("App");

anaTable.controller("anagramTable", ($scope) => {
	$scope.results = ['fair', 'efia','diasia', 'asdfasdf'];
	$scope.wordFilter = '';
	// $scope.sort = [false, false]; // keeps track of whether it's a) sorted, and b) alphabetical or reverse alphabetical
	// $scope.allWords = []; //auto-populated in cases of <100 permutations
	// $scope.indexes = new Set(); // this will keep track of indexes used when grabbing randomValues from allWords ?
	$scope.wordStock = new Set(); // this will keep track of anagrams in to prevent duplicate. it populates until size === anagrams.size;
	$scope.wordArr = []; // this is auto-populated once wordStock reaches size 10 or size of anagrams, whichever is lower
	$scope.validWord = "";
	$scope.anagram = "";

	$scope.$watch('validWord', (newValue, oldValue) => {
		//check if total number of unique permutations are greater than 10
		// if so, use findAnagrmas();
		console.log($scope.wordStock.size);
		if (countAllUniquePermutations($scope.validWord) > 10 || $scope.validWord !== '') {
			while ($scope.wordStock.size < 10) {
				let gibberish = $scope.shuffleString(validWord);
				if (!$scope.wordStock.has(gibberish)) {
					$scope.wordStock.add(gibberish);
				}
			}
			$scope.results = [...$scope.wordStock];
		} else {
			$scope.results = [anagram];
		}
	})


const countAllUniquePermutations = (string) => {
	let chars = string.toLowerCase();
	let size = string.length;
	let maxCharCount = 36; // this includes all alphabet and numbers 0 to 9
	let frequency = Array(36).fill(0);
  let totalProduct = 1;

	for (let i = 0; i < size; i++) {
		if (chars[i] >= 'a') {
			frequency[(chars.charCodeAt(i) - 87)]++; 
		} else if (chars[i] - chars[i] === 0) {
			frequency[parseInt(chars[i])]++;
		}
	}

	for(let x = 0; x < 36; x++) {
		totalProduct *= factorial(frequency[x]);
	}
	// console.log(frequency);
	// console.log(totalProduct);
	// console.log(size,'size',factorial(size), 'factorial Size');
	let num = factorial(size);

	return num / totalProduct;
}

const factorial = (n) => {
	let product = 1;

	for (let i = 2; i <= n; i++) {
		product *= i;
	}
	return product;
}


	// $scope.findAnagrams = () => {
	// 	// how to make anagram
	// 	// shuffle string
	// 	$scope.anagram = $scope.shuffleString($scope.validWord);
	// }

	$scope.shuffleString = (stringInput) => {
		let strArr = stringInput.split('');
		let size = stringInput.length;

		for (let i = 0; i < size; i++) {
			let randNum = $scope.randNumGenerator(i, size);
			let temp = strArr[i];
			strArr[i] = strArr[randNum];
			strArr[randNum] = temp;
		}
		return strArr.join('');
	}


	$scope.randNumGenerator = (min, max) => {
		return Math.floor( (Math.random() * (max - min)) + min);
	}

});	

// 2 functions, findAllPermutations for numbers less than 10,
// findRandomPermutaion for ones that are great
// In either way, use Set in order to avoid duplicates.
// use find All permutations if unique permutations are less than 200.

//logic for removing / keeping anagrams
	//if checked status for the anagarm is 'true', keep
	//otherwise, remove from set AND restart