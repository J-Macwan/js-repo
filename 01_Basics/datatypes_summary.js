/*

// primitive
// 7 types: bool, number, BigInt, null, undefined, string, Symbol

const score =  100;
const scoreValue = 100.3 

const isLoggedIn = false;
const outSideTemp = null
let userEmail;// automatically undefinad


const id = Symbol("123")
const anotherId = Symbol("123")
console.log(id === anotherId);//gives false 

const bigNumber = 12345654324564n //used for bigint
console.log(typeof bigNumber);//gives bigint as datatype



//non-primitive(regference types)
//array, object, functions --> all these are objects datatype
//Que = Js is statically types ordynamically typed

const heros = ["shaktiman","nagraj", "doga"];//Array
let myObj = {
    name: "joy",
    age:21,
    isLoggedIn:false
}//object


const myFunction = function(){
    console.log("Hello World")
}//function that stored in variable
myFunction()//calling the function


*/


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//Stack memory(used primitive data types) and heap memory(used non-primitive data types):


//stack memory is used for storing the primitive data types and reference to the heap memory is used for storing non-primitive data types
//stack memory is faster than heap memory
//stack memory is limited in size and heap memory is larger in size
//stack memory is used for static memory allocation and heap memory is used for dynamic memory allocation
//stack memory is used for storing the function call and heap memory is used for storing the objects
//stack memory is used for storing the local variables and heap memory is used for storing the global variables
//stack memory is used for storing the data types and heap memory is used for storing the objects
//stack memory is used for storing the primitive data types and heap memory is used for storing the non-primitive data types

let myytname = "joy";
let anotherName = myytname;
anotherName = "joymacwan";
console.log(myytname)//joy
console.log(anotherName)//joymacwan
console.log("\n");


let userOne = {
    email: "user1@example.com",
    UPI:"user@ybl"
}
let userTwo = userOne;
userTwo.email = "user2@example.com"
console.log(userOne.email)//user2@example.com
console.log(userTwo.email)//user2@example.com




//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//Type coercion
//type conversion is done by the developers
//type coercion is done by the js engine
//type coercion is done by the js engine when the operators are involved
//type coercion is done by the js engine when the values are compared
//type coercion is done by the js engine when the values are passed as arguments to functions
//type coercion is done by the js engine when the values are assigned to variables

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//Type conversion
//type conversion is done by the developers
//type conversion is done by the js engine when the values are compared
//type conversion is done by the js engine when the values are passed as arguments to functions
//type conversion is done by the js engine when the values are assigned to variables    
//type conversion is done by the js engine when the operators are involved
//type conversion is done by the js engine when the values are compared
//type conversion is done by the js engine when the values are passed as arguments to functions


