"use strict";//use strict mode because its new version of js
//alert(3+3);// we are use nodejs so we can't use alert function, its run on browser

let name = "John";
let isLogged = true;

//list all data types 
//1. String
//2. Number range is -9007199254740991 to 9007199254740991
//3. Boolean
//4. null
//5. undefined
//6. Symbol
//7. BigInt //range of BigInt is -9007199254740991 to 9007199254740991
//float and double are not available in js
//symbol // It is used for unique identifier




//String
let str = "Hello World";
console.log(str);

//Number
let num = 10;
console.log(num);   

//Boolean
let bool = true;
console.log(bool);

//null
let n = null;
console.log(n);

//undefined
let und = undefined;
console.log(und);

//Symbol
let sym = Symbol();
console.log(sym);

//BigInt
let big = 100n;//BitInt Range: (-2n ** 53n) to (2n ** 53n) means (-9007199254740991n) to (9007199254740991n)
console.log(big);

//symbol
let s = Symbol("Hello");
console.log(s);

//object
let obj = {
    name: "John",
    age: 30
};
console.log(obj);

//array
let arr = [1, 2, 3];
console.log(arr);

//function
function add(a, b) {
    return a + b;
}
console.log(add(1, 2));

//date
let date = new Date();
console.log(date);

//regex
let reg = /hello/;
console.log(reg);

//error
try {
    throw new Error("Something went wrong");
} catch (error) {
    console.log(error);
}

//typeof operator
console.log(typeof str)
console.log(typeof str);//string
console.log(typeof num);  //number
console.log(typeof bool);  //boolean 
console.log(typeof n); //object   
console.log(typeof und); //undefined   
console.log(typeof sym);  //symbol 
console.log(typeof big);  //bigint 
console.log(typeof s);   //symbol
console.log(typeof obj);  //object
console.log(typeof arr);   //object
console.log(typeof date);//object 
console.log(typeof reg);   //object
console.log(typeof add);//function   
console.log(typeof error);//object


