const Marvel_heroes = ['Ironman', 'Thor', 'Hulk'];
const DC_heroes = ['Batman', 'Flash', 'Aquaman'];

/*
Marvel_heroes.push(DC_heroes);
console.log(Marvel_heroes);//it will add the DC_heroes array as a single element in the Marvel_heroes array.
console.log('\n\n');

console.log(Marvel_heroes[3][1]);//it will print the 2nd element of the DC_heroes array. //Flash
*/
/*
const allHeroes =  Marvel_heroes.concat(DC_heroes);
console.log(allHeroes);//it will merge both the arrays and print the result. //['Ironman', 'Thor', 'Hulk', 'Batman', 'Flash', 'Aquaman']

*/

/*
const allNewHeroes = [...Marvel_heroes, ...DC_heroes];//spread operator to merge the arrays.
//console.log(allNewHeroes);//it will merge both the arrays and print the result. //['Ironman', 'Thor', 'Hulk', 'Batman', 'Flash', 'Aquaman']
const anotherArray = [1,2,3,[4,5,6],7,[6,7,[4,5]]];
const realAnotherArray = anotherArray.flat(Infinity);//it will remove the nested arrays upto the level specified.
//flat() method is used to flatten the array upto the level specified.
//infinity is used to remove all the nested arrays.
console.log(realAnotherArray);

*/

console.log(Array.isArray("Joy"));//false //it will check if the given value is an array or not.
console.log(Array.from("Joy"));//it will convert the string into an array. //['J', 'o', 'y']

console.log(Array.from({name:"Joy"}));//it will convert the object into an array. //[]
//empty array as object is not iterable.iterable means the object should have a Symbol.iterator property.

let score1 =100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1, score2, score3));//it will convert the given values into an array. //[100, 200, 300]
//.of method is used to convert the given values into an array. and values can be of any type.
