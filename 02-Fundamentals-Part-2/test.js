// //ecercice

// const calcAge = birthYear => {

//     return 2020 - birthYear;
// };

// //NOTE:
// const years = [1983, 2000, 1956, 1974];
// console.log(years.map(el => calcAge(el)));
// years.map(el => {
//     console.log(calcAge(el));
// });

// //TODO: 

let temps = [-3,23,5,23,-4];

const  maxT = Math.max.apply(Math,temps);
console.log("maxT", maxT)

const  minT = Math.min.apply(Math,temps);
console.log("minT", minT)

const amplitude  = maxT - minT;
console.log("amplitude", amplitude)