//function ek package ki tarah hai use app kahi bhi call kar sakte hai
/*
function sayMyName(){
    console.log('H');
    console.log('I');
    console.log('T');
    console.log('E');
    console.log('S');
    console.log('H');
}
sayMyName()//execution
*/
/*
function addTwoNumbers(num1, num2)//parameters are passed here its called parameter because it passes the value
{
    console.log(num1+num2);//arguments are passed here but its not best practice to pass the value here
}
addTwoNumbers(3,4) 
addTwoNumbers(3,null) //if there is not number then it will show NaN or character if there is string
*/
function addTwoNumbers(num1,num2){
    let result = num1 + num2; //or
    //return num1 + num2; //return is used to return the value its also best practice to return the value
    //return result;

    /*//return the value its best practice to return the value
    //return always last statement of the function
    //otherFunctions it will not execute because return is the last statement */

    //console.log(result);
}
function loginUserMessage(username = 'User')//default value is set here
{
if(username === undefined)// or if(!username) or if(username === null) or if(username === '') or if(username === 0) or if(username === false)
    {
    console.log('Please Provide Username');
    return;//
}
    return `${username} Just Logged In`;
}

loginUserMessage('Hitesh');//it will not show the output because we are not calling the function
//console.log(loginUserMessage('Hitesh'));//it will show the output because we are calling the function

//console.log(loginUserMessage());//it will show undefined because we are not passing the value


//--------------------------------------------shoppping cart--------------------------------------------

function calculateCartPrice(num1){
    return num1;
}
console.log(calculateCartPrice(2));
