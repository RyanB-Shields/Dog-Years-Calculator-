//Dog Years Calculator

//My age is...
const myAge = 29;
//Calculate early dog years
let earlyYears = 2;
earlyYears = earlyYears*10.5;
//Set later dog years
let laterYears = myAge-2;
//Calculate later dog years
laterYears *=4;
//My age in dog years is...
let myAgeInDogYears = earlyYears + laterYears;
//My Name is ...
const myName = 'Ryan Boughton-Shields'.toLowerCase();
//My naame is ... my age is ... which is ... in dog years
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);