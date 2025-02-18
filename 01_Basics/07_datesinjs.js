let myDate = new Date();
console.log(myDate);//2021-07-07T06:00:00.000Z
console.log(myDate,toString());//Wed Jul 07 2021 11:30:00 GMT+0530 (India Standard Time)
console.log(myDate.toDateString());//Wed Jul 07 2021
/*
let myCreateDate = new Date(2023, 0, 23);//year, month, date (month is 0 based)
console.log(myCreateDate.toDateString);//Sun Jan 22 2023
console.log(myCreateDate.toTimeString);//00:00:00 GMT+0530 (India Standard Time)
console.log(myCreateDate.toLocaleString());//1/22/2023, 12:00:00 AM

*/
/*
let myCreateDate = new Date("01-14-2023");
console.log(myCreateDate.toLocaleString());//1/14/2023, 12:00:00 AM

let mtTimeStamps = Date.now();
console.log(mtTimeStamps);//1625656200000  //milliseconds from 1970
console.log(myCreateDate.getTime());//1671062400000

console.log(Math.floor(Date.now()/1000));//1625656200 //seconds from 1970
*/

let newDate = new Date();
console.log(newDate);
console.log(newDate.getFullYear());//2021
console.log(newDate.getMonth()+1);//7 (0 based)
//`{newDate.getDay()} and the Time {newdate.getTime} `;//3 and the Time 1625656200000

newDate.toLocaleString('default' ,
     {month: 'long'},
        {weekday: 'long'},
        {day: 'numeric'},
        {year: 'numeric'}

);//July 7, 2021, 11:30:00 AM