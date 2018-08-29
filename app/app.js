var mainCtrl = angular.module("App",[]);


mainCtrl.controller("mainController", ($scope) => {
	$scope.validWord = "";
	$scope.results = [];
	$scope.wordStock = new Set();
	$scope.numPerm = 0;
	$scope.tableView = false;
	$scope.checkedNumbers = 0;
	$scope.resultKeepers = {
		0 : false, 1: false, 2: false, 3: false, 4: false, 5: false, 6: false, 7: false, 8: false, 9: false
	};
//keep track of resultKeepStatus

	$scope.$watch('validWord', (newValue, oldValue) => {
		//check if total number of unique permutations are greater than 10
		// if so, use findAnagrmas();
		// console.log($scope.wordStock.size);
		$scope.tableReset();
	})

	$scope.init = () => {
		$scope.resetResultKeepers();
	}

	$scope.trackChecked = (indexValue) => {
		$scope.resultKeepers[indexValue] ? $scope.checkedNumbers++ : $scope.checkedNumbers--;
	}

	$scope.resetResultKeepers = () => {
		for (let i = 0; i < 10; i++) {
			$scope.resultKeepers[i] = false;
		}
	}

	$scope.tableReset = () => {
		$scope.validWord === '' ? $scope.tableView = false : $scope.tableView = true;
		$scope.fillTable();	
		$scope.anagram = $scope.shuffleString($scope.validWord);
	}


	$scope.fillTable = () => {
		$scope.numPerm = $scope.countAllUniquePermutations($scope.validWord);
		$scope.adjustKeepers();

		if ($scope.numPerm > 10) {
			while($scope.wordStock.size < 10) {
				let gibberish = $scope.shuffleString($scope.validWord);
				$scope.wordStock.add(gibberish);
			} 
			$scope.results = [...$scope.wordStock];
			// console.log($scope.wordStock);
		} else if ($scope.numPerm <= 10 && $scope.numPerm > 0) {
			let limit = $scope.numPerm;
			// limit + $scope.checkedNumbers >= 10 ? limit = 10 : limit = $scope.checkedNumbers + limit - 1;

			while($scope.wordStock.size < limit) {
				let gibberish = $scope.shuffleString($scope.validWord);
				$scope.wordStock.add(gibberish);
			} 
			$scope.results = [...$scope.wordStock];
			// console.log($scope.wordStock);
		}
	}

	$scope.adjustKeepers = () => {
		for (let i = 0; i < 10; i++) {
			if ($scope.resultKeepers[i] === false) {
				$scope.wordStock.delete($scope.results[i]);
			}
		}
	}

	$scope.countAllUniquePermutations = (string) => {
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
			totalProduct *= $scope.factorial(frequency[x]);
		}
		let num = $scope.factorial(size);

		return num / totalProduct;
	}

	$scope.factorial = (n) => {
		let product = 1;

		for (let i = 2; i <= n; i++) {
			product *= i;
		}
		return product;
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