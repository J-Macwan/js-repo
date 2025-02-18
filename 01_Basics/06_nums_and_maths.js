/*

const score = 100;//automatically number type
console.log(typeof score);


const balance = new Number(1000);// we can use Number object to create number
console.log(balance);

console.log(balance.toString().length);//convert number to string and get the length of the string
console.log(balance.toFixed(2)); //convert number to string and get the length of the string
//it used when show how many number after the decimal point like 2.00
 
const anotherNumber = 123.5678;
console.log(anotherNumber.toPrecision(3));//it used for round figure like 123.0

const num = 10000000;
console.log(num.toLocaleString());// - it used for comma separated value like 10,000,000 but US format
console.log(num.toLocaleString('en-IN'));// - it used for comma separated value like 1,00,00,000 but Indian format


*/

//+++++++++++++++++++++++++++++++++++++ Math++++++++++++++++++++++++++++++++++++++++++++++++

console.log(Math );//Math is a object
console.log(Math.PI);//3.141592653589793
console.log(Math.abs(-100));//100 - it used for absolute value means positive value
console.log(Math.round(1.7));//2 - it used for round figure
console.log(Math.ceil(1.4));//2 - it used for round figure to upper value it means it if 1.2 then it will be 2
console.log(Math.floor(1.4));//1 - it used for round figure to lower value
console.log(Math.min(10,20,30,40,50));//10 - it used for find minimum value
console.log(Math.max(10,20,30,40,50));//50 - it used for find maximum value
console.log(Math.random());//0.123456789 - it used for generate random number between 0 to 1



console.log(Math.random());// random number between 0 to 1
console.log(Math.random()*10);// random number between 0 to 10
console.log((Math.random()*10) + 1);// random number between 1 to 10 to avoid 0 value
console.log(Math.floor(Math.random()*10) + 1);// random number between 1 to 10 to avoid 0 value and round figure

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min);// random number between 10 to 20 to avoid 0 value and round figure
