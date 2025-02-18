//Arrya

const myArray = [1,2,3,4,5,6,7,8,9,10];//Array of numbers from 1 to 10 its 
//js array is zero based index and it is mutable means we can change the value of array
//its mixed array of numbers, strings etc..
//array copy operation makes shallow copy of array rather  than deep copy
//means it will copy the reference of array not the actual array
//Array is a reference type //Array is a object in js
//deep copy of array can be done by using spread operator or by using array.from() method 
// it means it will create a new array with new reference
/*Shallow Copy → References the same inner objects.
Deep Copy → Creates entirely new copies of everything. */

console.log(myArray[0]);//1
const heroes = ['Batman', 'Superman'];
console.log(heroes[0]);//Batman
const myArry = new Array(1,2,3,4,5,6,7,8,9,10);//Array of numbers from 1 to 10 its automatically create array
console.log(myArry);//[1,2,3,4,5,6,7,8,9,10]


//Array Methods

myArray.push(11);//add element at the end of array
myArray.push(12);
console.log(myArray);//[1,2,3,4,5,6,7,8,9,10,11]
myArray.pop();//remove element from end of array
console.log(myArray);//[1,2,3,4,5,6,7,8,9,10,11]

myArray.unshift(9);//add element at the start of array  9 will be added at index 0
myArray.shift();//remove element from start of array

console.log(myArray.includes(5));//true //check if element is present in array or not. boolean value
console.log(myArray.indexOf(5));//4 //find the index of element in array


const newArr = myArray.join('');//convert array to string
console.log(myArray);
console.log(newArr);//1234567891011
console.log(typeof newArr);//string



console.log("\n\n\n");

//sclice method and splice method

console.log("A", myArray);

const myn1 = myArray.slice(2, 5);//it will return the new array from index 2 to 5
//slice method will not change the original array it will return the new array

console.log(myn1);
console.log("B", myArray);



const myn2 = myArray.spice(2, 5);//it will remove the element from index 2 to 5 and return the removed element
//splice method will change the original array
console.log("C", myArray);
console.log(myn2);





