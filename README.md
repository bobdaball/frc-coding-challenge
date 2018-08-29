# frc-coding-challenge

How to use:

Open up the html on a browser.

Tasks: Completed Basic, partially completed Advanced.

Partially?
	Partially, because it is buggy if the input are not alphabets or numbers. 
	Specifically, the function can get into an infinite loop if duplicate symbols 
	are used without having adequate number of alphabets and / or numbers before 
	entering. This is due to not taking into consideration of symbols. Can be fixed
	by adjusting the function that calculates number of possible anagrams.

	Also, the retaining of anagrams works if you are increasing input string length, 
	but can get removed if reducing. This occurs due to the function that puts a 
	limit on the length of table

Any plans for future?
	Would've added filter using the ng-show method, and utilitzed sort method by 
	manipulating the array used for table generation.

As for whether it exists in a dictionary, I would've used the commented out package
to check if it exists in a phonetic dictionary, before adding to table.
however, this would've required more careful planning of limit to prevent infinite loop.
