// This assignment is inspired by a problem on Exercism (https://exercism.org/tracks/javascript/exercises/etl) that demonstrates Extract-Transform-Load using Scrabble's scoring system. 

const input = require("readline-sync");

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

function oldScrabbleScorer(word) {
  
   word = word.toUpperCase();
	let letterPoints = "";
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
		 }
 
	  }
	}
	return letterPoints;
 }

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //
//const gameWord = input.question("Let's play some scrabble! Enter a word:")

function initialPrompt() {
   let gameWord = input.question("Please enter a word");

   return gameWord

   
};


function simpleScorer(simpleWord) {
   simpleWord = simpleWord.toUpperCase();
   simpleScorePoints = 0;
   for (let i = 0; i < simpleWord.length; i++){
   simpleScorePoints += 1;
      
   };
   return (simpleScorePoints);
        
};



function vowelBonusScorer(vowelWord){
   vowelWord = vowelWord.toUpperCase();
   let vowelBonusScore = 0;
   let vowelBonusPoints = ['A', 'E', 'I', 'O', 'U']
	
   for (let i = 0; i < vowelWord.length; i++) {

      if (vowelBonusPoints.includes(vowelWord[i])){
         vowelBonusScore += 3
      } else {
         vowelBonusScore += 1
      }
   }
      return vowelBonusScore;
            
}   
   

function scrabbleScorer(scrabbleWord){
   scrabbleWord = scrabbleWord.toLowerCase();
   let scrabbScore = 0;
   
   
   for (let i = 0; i < scrabbleWord.length; i++){
      let letter = scrabbleWord[i];
      scrabbScore += newPointStructure[letter]
   }
   return scrabbScore

}


let simpleScore = {
   name: 'Simple Score',
   description: 'Each letter is worth 1 point.', 
   scorerFunction: simpleScorer,
}
let bonusVowels = {
   name: 'Bonus Vowels',
   description: 'Vowels are 3 pts, consonants are 1pt.',
   scorerFunction: vowelBonusScorer,
}
let scrabble = {
   name: 'Scrabble',
   description: 'The traditional scoring algorithm',
   scorerFunction: scrabbleScorer,
}

const scoringAlgorithms = [simpleScore, bonusVowels, scrabble];



function scorerPrompt() {
   let scoreSelection = input.question(`Which scoring algorithm would you like to use? \n 0 - Simple: ${simpleScore.description}\n 1 - Vowel Bonus: ${bonusVowels.description}\n 2 - Scrrable: ${scrabble.description}\n Enter 0, 1, or 2 : `)
   
   return scoringAlgorithms[Number(scoreSelection)]
  
   }



function transform(oldPointStructure) {
   let newPointStr = {};
   for (let item in oldPointStructure){
      itemArray = oldPointStructure[item];
      for (let i = 0; i < itemArray.length; i++){
         newPointStr[itemArray[i].toLowerCase()] = Number(item);
         
      }
         
   }
   
   return newPointStr
   
   
  
   
}
   




let newPointStructure = transform(oldPointStructure)



function runProgram() {
   let gameWord = initialPrompt();
   let scoreAlg = scorerPrompt();
   console.log("scoring function result: ",scoreAlg.scorerFunction(gameWord));
   
   
   
   
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScorer: simpleScorer,
   vowelBonusScorer: vowelBonusScorer,
   scrabbleScorer: scrabbleScorer,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};
