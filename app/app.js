angular.module("App",['main']);
angular.module("main", []);

angular.module("main").controller("mainController", ($scope) => {
	$scope.validWord = "";
	$scope.anagrams = new Set();
	$scope.anagram = "";
	// $scope.checkValidity = (word) => {
	// 	let bool = wordChecker[word];
	// 	return bool === undefined ? false : true;
	// }
	

	$scope.findAnagrams = () => {
		//find an anagram, and add to set.

		//just for starters, see if we can add 'a'
		
		if ($scope.anagram === "" && $scope.validWord !== "") {
			$scope.anagram = $scope.validWord;
		}

		$scope.anagram += 'a';
	}
});