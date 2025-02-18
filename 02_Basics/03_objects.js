//singleton object 
//it is an object that is created only once and is shared by all the modules in the application
//it is used to store global state
//if you use constructor function to create a singleton object, it will not work because every time you call the constructor function, it will create a new object


//object literal
Object.create(null) //creates an empty object
Object.create(Object.prototype) //creates an object with Object prototype

const mySym = Symbol("Key1")
const JsUser = {
    name: 'John',
    'full name': 'John Doe',
    [mySym] : "mykey1", //it is a symbol key. you write in square brackets then the it will be a symbol key
    age: 30,
    location:'jaipur',
    email: 'joy@gmail.com',
    isLoggedIn: false,
    lastLoginDays:["Monday", "Tuesday", "Wednesday"]
}//it uses keys and values to create an object

//accessing object properties
console.log(JsUser.email)//dot notation its defined as a string and its not good practice
console.log(JsUser['email'])//its defined as a string

console.log(JsUser["full name"]);//if the key has a space, you have to use bracket notation

console.log(JsUser.mySym)//it will not work because it is not defined as a string;
console.log(typeof JsUser.mySym)
console.log(typeof JsUser[mySym]);//it will work because it is defined as a symbol key and it is a symbol key because it is defined in square bracket
JsUser.email = "joy@zoho.com"//you can overrides 
//Object.freeze(JsUser)//value not change
JsUser.email = "joy@ms.com"
console.log(JsUser);

/* Not using Github Copilot */

JsUser.greeting = function(){
    console.log("Hello Js User");
}
console.log(JsUser.greeting);//function not execute it gives reference
console.log(JsUser.greeting());//if error show then above comment .freeze()


JsUser.greetingTwo = function(){
    console.log(`Hello Js User, ${this.name}`);
}
console.log(JsUser.greetingTwo());

























//addint two variables

let a =10;
let b = 20







