// import anaTableController from "./components/anagramTable/anaTableController";

angular.module("App",['main']);
angular.module("main", []);

angular.module("main").controller("mainController", ($scope) => {
	$scope.validWord = "";


	$scope.checkValidity = (word) => {
		let bool = wordChecker[word];
		return bool === undefined ? false : true;
	}
	
});