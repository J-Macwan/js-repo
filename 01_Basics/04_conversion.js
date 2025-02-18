console.log(2>1);
console.log(2>=1);
console.log(2<1);
console.log(2<=1);
console.log(2==1);
console.log(2!=1);
console.log("\n");


//Comparing different data types
console.log("2">1);//js automatically convert string into number
console.log("02">1);//js automatically convert string into number

console.log("\n");
console.log(null>0);
console.log(null==0);
console.log(null>=0);//value conversion problem
/*  The reason is that equality check == and comparision <> <= >= work differently.
    comparisions convert null to a number, treating as 0.
    that's why (3) null >=0 is true and (1) null>0 is false.
*/

console.log("\n");
console.log(undefined ==0);
console.log(undefined >0);
console.log(undefined <0);

//=== used for strictly check
console.log("2"=== 2) ;
