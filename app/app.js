var mainCtrl = angular.module("App",[]);


mainCtrl.controller("mainController", ($scope) => {
	$scope.validWord = "";
	$scope.anagrams = new Set();
	$scope.anagram = "";

	$scope.$watch('validWord', (newValue, oldValue) => {
		$scope.findAnagrams();
	})
	//previous word is necessary to see if word has changed.

	// $scope.checkValidity = (word) => {
	// 	let bool = wordChecker[word];
	// 	return bool === undefined ? false : true;
	// }
	

	$scope.findAnagrams = () => {
		//find an anagram, and add to set.

		//just for starters, see if we can add 'a'
		
		// how to make anagram
		// shuffle string
		$scope.anagram = $scope.shuffleString($scope.validWord);
	}

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