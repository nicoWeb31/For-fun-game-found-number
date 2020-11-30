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



document.querySelector('button').addEventListener('click', function (){

  const text = document.querySelector('textarea').value;
  console.log("🚀 ~ file: script.js ~ line 69 ~ text", text)
  

  //spliter les variables
  const rows = text.split('\n')
  console.log("🚀 ~ file: script.js ~ line 73 ~ variables", rows)

  for(const [index,variable] of rows.entries()) {
    console.log(variable)
    console.log(index)
    const [firstword, secondWord] = variable.toLowerCase().trim().split('_')

    // const output = `${firstword}${secondWord[0].toUpperCase()}${secondWord.slice(1)}`
    const output = `${firstword}${secondWord.replace(secondWord[0], secondWord[0].toUpperCase())}`

    console.log("🚀 ~ file: script.js ~ line 82 ~ output", `${output.padEnd(20)}${'😻'.repeat(index + 1 )} `)

    
    // console.log("🚀 ~ file: script.js ~ line 79 ~ vSplitTolower", vSplitTolower)
    // const mot2 = vSplitTolower[1].split('').slice(0,1)[0].toUpperCase().join('');
    // console.log("🚀 ~ file: script.js ~ line 81 ~ mot2", mot2)
    // // const lettre1mot2 = mot2.slice



  }
  
})


