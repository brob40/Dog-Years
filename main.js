// used var to creat variable myAge
var myAge = 26; 
// wrote early years with var as it may change
var earlyYears = 2; 
// reassigned earlYears with new equation with *=
earlyYears *= 10.5; 
//reassigned myAge with -=; then reassigend the new equation to myAge
myAge -= 2; 
var laterYears = myAge;
//*= to reassign laterYears
laterYears *= 4; 
//added years to gether using + 
var myAgeInDogYears = earlyYears + laterYears;
//.toLowerCase(), put my name into lower case letters
var myName = 'Brandon Robbins'; 
myName = myName.toLowerCase();
//interpolation with backticks and ${} for variables
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`)
