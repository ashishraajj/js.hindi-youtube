// "hello"+"world"
const Name="Ashish"
const repoCount=35

console.log(Name+repoCount+"hehehe");
console.log(`hello my name is ${Name} im a boy of ${repoCount} and all`);

const gameName=new String("jackfruits")

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length); //to find the lenght of the string
console.log(gameName.toUpperCase()); //to upper case the number
console.log(gameName.charAt('3')); //to see the char at position 2
console.log(gameName.indexOf('t')); //to get the index no of the char 't'

//to get the substring of the main string
let substr=gameName.substring(0,4)
console.log(substr);

//to get substring can use -ve no as well
let substrr=gameName.slice(-8,4)
console.log(substrr);

//trim() use to remove the spaces from string
const newString="  josdffjl   "
console.log(newString);
console.log(newString.trim());

const url="https://ashish.com%7@dhfhkl"
console.log(url.replace('%7', '-'));
console.log(url.includes('com'));

