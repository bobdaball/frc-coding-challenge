var anaTable = angular.module("App");

anaTable.controller("anagramTable", ($scope) => {
	$scope.results = ['fair', 'efia','diasia', 'asdfasdf'];
	$scope.wordFilter = '';
	$scope.sort = [false, false]; // keeps track of whether it's a) sorted, and b) alphabetical or reverse alphabetical
	$scope.wordStock = new Set(); // this will keep track of anagrams in to prevent duplicate. it populates until size === anagrams.size;
	$scope.wordArr = []; // this is auto-populated once wordStock reaches size 10 or size of anagrams, whichever is lower
	


	$scope.findAllAnagrams = (inputString) => {

	}
});	

// 2 functions, findAllPermutations for numbers less than 10,
// findRandomPermutaion for ones that are great
// In either way, use Set in order to avoid duplicates.