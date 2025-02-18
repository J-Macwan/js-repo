const name = "joy";
const repoCount = 100;

//console.log(name + repoCount +" value"); // not a good practice
console.log(`hello my name is ${name} and I have ${repoCount} `);//good practice and it called string interpolation
console.log(`hello my name is ${name.toUpperCase()} and I have ${repoCount} `);//good practice


const gameName = new String("pubg") //object
console.log(gameName);//String {"pubg"}
console.log(gameName.length);//4
console.log(gameName[0]);//p
console.log(gameName.__proto__);//it gives the prototype of the object
console.log(gameName.toUpperCase());//PUBG it gives the uppercase of the string but not change the original string
console.log(gameName.charAt(2));//u it gives the character at the given index
console.log(gameName.indexOf("u"));//2 it gives the index of the given character

const newString = gameName.substring(0,3);
console.log(newString);//pub 

const anotherName = gameName.slice(-4,3);
console.log(anotherName);//pub

const newStringOne = "      joy    ";
console.log(newStringOne);//      joy
console.log(newStringOne.trim());//joy it removes the extra spaces from the string

const url = "https://www.googl123.com";
console.log(url.replace("123","e"));//https://www.google.com it replaces the given string with the new string
console.log(url.includes("https"));//true it checks the given string is present in the original string or not
console.log(url.split("."));//(3) ["https://www", "googl123", "com"] it splits the string with the given character
