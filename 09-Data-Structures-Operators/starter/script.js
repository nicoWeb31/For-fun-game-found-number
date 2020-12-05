'use strict';

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

///////////////////////////////////////
// Coding Challenge #4

// Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

// The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

/* THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure
*/
// SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
// underscoreCase      ✅
// firstName           ✅✅
// someVariable        ✅✅✅
// calculateAge        ✅✅✅✅
// delayedDeparture    ✅✅✅✅✅

// HINT 1: Remember which character defines a new line in the textarea 😉
// HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
// HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
// HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

// Afterwards, test with your own test data!

// GOOD LUCK 😀

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  console.log('🚀 ~ file: script.js ~ line 69 ~ text', text);

  //spliter les variables
  const rows = text.split('\n');
  console.log('🚀 ~ file: script.js ~ line 73 ~ variables', rows);

  for (const [index, variable] of rows.entries()) {
    console.log(variable);
    console.log(index);
    const [firstword, secondWord] = variable.toLowerCase().trim().split('_');

    // const output = `${firstword}${secondWord[0].toUpperCase()}${secondWord.slice(1)}`
    const output = `${firstword}${secondWord.replace(
      secondWord[0],
      secondWord[0].toUpperCase()
    )}`;

    console.log(
      '🚀 ~ file: script.js ~ line 82 ~ output',
      `${output.padEnd(20)}${'😻'.repeat(index + 1)} `
    );

    // console.log("🚀 ~ file: script.js ~ line 79 ~ vSplitTolower", vSplitTolower)
    // const mot2 = vSplitTolower[1].split('').slice(0,1)[0].toUpperCase().join('');
    // console.log("🚀 ~ file: script.js ~ line 81 ~ mot2", mot2)
    // // const lettre1mot2 = mot2.slice
  }
});

///////////////////////////////////////
// Coding Challenge #1

/* 
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK 😀
*/

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// const player1 = [
//   'Neuer',
//   'Pavard',
//   'Martinez',
//   'Alaba',
//   'Davies',
//   'Kimmich',
//   'Goretzka',
//   'Coman',
//   'Muller',
//   'Gnarby',
//   'Lewandowski',
// ];

// const player2 = [
//   'Burki',
//   'Schulz',
//   'Hummels',
//   'Akanji',
//   'Hakimi',
//   'Weigl',
//   'Witsel',
//   'Hazard',
//   'Brandt',
//   'Sancho',
//   'Gotze',
// ];

// const goalkeeperT1 = player1[0];
// console.log("🚀 ~ file: script.js ~ line 181 ~ goalkeeperT1", goalkeeperT1)

// const fieldPlayers = player1

// const all_players = [...player1, ...player2]
// console.log("🚀 ~ file: script.js ~ line 185 ~ all_players", all_players)

// console.log("🚀 ~ file: script.js ~ line 188 ~ players1Final", players1Final)
// const players1Final = [...player1,'Thiago', 'Coutinho','Perisic']


const [player1, player2 ] = game.players;
console.log("🚀 ~ file: script.js ~ line 193 ~ player2", player2)
console.log("🚀 ~ file: script.js ~ line 193 ~ player1", player1)


// const goalkeeperT1 = player1[0];
// console.log("🚀 ~ file: script.js ~ line 197 ~ goalkeeperT1", goalkeeperT1)

const [goalkeeperT1, ...fieldPlayers]= player1
console.log("🚀 ~ file: script.js ~ line 201 ~ fieldPlayers", fieldPlayers)
console.log("🚀 ~ file: script.js ~ line 201 ~ goalkeeperT1", goalkeeperT1)

const all_players = [...player1, ...player2]


const players1Final = [...player1,'Thiago', 'Coutinho','Perisic']


const {odds:{team1,x : draw,team2}} = game;
console.log("🚀 ~ file: script.js ~ line 211 ~ draw", draw)
console.log("🚀 ~ file: script.js ~ line 211 ~ team2", team2)
console.log("🚀 ~ file: script.js ~ line 211 ~ team1", team1)


const printGoals = (...nbr) => {

  for(let i = 0; i < nbr.length; i++) {
    console.log(nbr[i]);
  }
}

printGoals('toto', 'tata','titi');
printGoals('toto', 'tata','titi','mama');
printGoals(...game.scored)


const winner = team1 < team2 ? `la  team 1 win the game with ${team1} ` : `la  team 1 win the game with ${team2} `;
console.log(winner)