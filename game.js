//declare the array for team options//

var teamChoices = [
["c","a","r","d","i","n","a","l","s"],
["f","a","l","c","o","n","s"],
["r","a","v","e","n","s"],
["b","i","l","l","s"],
["p","a","n","t","h","e","r","s"],
["b","e","a","r","s"],
["b","e","n","g","a","l","s"],
["b","r","o","w","n","s"],
["c","o","w","b","o","y","s"],
["b","r","o","n","c","o","s"],
["l","i","o","n","s"],
["p","a","c","k","e","r","s"],
["t","e","x","a","n","s"],
["c","o","l","t","s"],
["j","a","g","u","a","r","s"],
["c","h","i","e","f","s"],
["r","a","m","s"],
["c","h","a","r","g","e","r","s"],
["d","o","l","p","h","i","n","s"],
["v","i","k","i","n","g","s"],
["p","a","t","r","i","o","t","s"],
["s","a","i","n","t","s"],
["g","i","a","n","t","s"],
["j","e","t","s"],
["r","a","i","d","e","r","s"],
["e","a","g","l","e","s"],
["s","t","e","e","l","e","r","s"],
["n","i","n","e","r","s"],
["s","e","a","h","a","w","k","s"],
["b","u","c","c","a","n","e","e","r","s"],
["t","i","t","a","n","s"],
"r","e","d","s","k","i","n","s"]
];

//randomizes the chosen word//

var random = Math.floor((Math.random()*(teamChoices.length-1)));

var whichWord = teamChoices[random];

var chooseWord = new Array(whichWord.length);

//create underscores//

for (var i=0; i < whichWord.length; i++){
	chooseWord[i] = "_ "
};

//prints the guess field//

function print chooseWord(){
	for (var i = 0; i < chooseWord.length; i++){
		var currentWord = document.getElementById("currentWord");

	}
}

//delete the guess field and replace it with the current one//

//if the letter guessed is not in the word, it will appear in the Letters Already Guessed field//

//check if all letters have been found//

//once Number of Guesses Remaining hits zero, user loses//

