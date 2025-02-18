/* Not using Github Copilot */

/*

//const tinderUser = new Object()

//console.log(tinderUser);//it give empty {}
const tinderUser = {}
tinderUser.id = '123abc'
tinderUser.name = "anshul"
tinderUser.isLoggedIn = false

console.log(tinderUser);

const regualrUser = {

    email:'user@gmail.com',
    fullname:{
        userFullName:{
        firstName:'Anshul',
        lastName:'Gandhi'
        }
    }
}
console.log(regualrUser.fullname);
console.log(regualrUser.fullname.userFullName);
console.log(regualrUser.fullname.userFullName.firstName);


const obj1 = {1:'a', 2:'b'}
const obj2 = {3:'a', 4:'b'}
const obj4 = {3:'a', 4:'b'}

//const obj3 = {obj1,obj2}//not recommended

//const obj3 = Object.assign({},obj1,obj2,obj4)//its recommended // the first all the obj1 to obj4 values show into {}. 
// {} --> its target and obj1, obj2, obj4-->source
// //if not then all the values show in obj1

const obj3 = {...obj1, ...obj2,...obj4}//spread
console.log(obj3);


//------------------------------------------useing Databases------------------------------------------ 
//in that array of objects

const users = [
    {
        id:1,
        email:'j@gmail.com'
    },
    {
        id:1,
        email:'j@gmail.com'
    },
    {
        id:1,
        email:'j@gmail.com'
    }
]
users[1].email
console.log(tinderUser);
console.log(Object.keys (tinderUser));
console.log(Object.values (tinderUser));
console.log(Object.entries (tinderUser));
console.log(tinderUser.hasOwnProperty('name'));//for checking this value is there of not
console.log(tinderUser.hasOwnProperty('address'));


*/
//---------------------------------------------------React----------------------------------------------------- 


const course ={
    courseName: 'Js In Hindi',
    price:'999',
    courseInstructor:'hitesh'
}
//course.courseInstructor   
const {courseInstructor} = course //--> Every Time course.courseInstructor is  very time consuming  for that it's use 
console.log(courseInstructor);

const {courseInstructor:instructor } = course //or you can use This
console.log(courseInstructor);


// in react this type of code write
/*const navbar = (props.company) => {
}
navbar = (company='google')*/

//for that restructuring use can use this:
const navbar = ({company}) => {
}
navbar = (company='google');


//------------------------------------------------------API--------------------------------------------------------
//in JSON
//API always in JSON format
/*
{
    'name':'joy',
    'courseName':'JS in hindi'
    'price':'free'
}

//API in Array Format
[
    {},
    {},
    {}
]

//randomuser.me API

//tool JSON formater
// 
// */