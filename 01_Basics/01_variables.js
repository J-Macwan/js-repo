const accountId  = 1234
let accountemail = "myemail@gmail.com" //used in new version of js, recommended because it can be changed and updated
var accountpassword = "12345" //used in old version of js, not recommended because it can be changed and updated
accountCity = "New York" //not recommended because it can be changed and updated
let accountState;//not declare value, it will be undefined

/* prefer not to use var because of issue in block scope and functionla scope */

//accountId = 5678  // TypeError: Assignment to constant variable. 


accountemail = "ymail@pmail.com"
accountpassword = "67890"
accountCity = "Los Angeles"

//console.log(accountId)
console.table({accountId, accountemail, accountpassword, accountCity, accountState})
/* 
    Object Format:
    in index table values are variables like accountId... 
┌─────────────────┬───────────────────┐
│ (index)         │ Values            │
├─────────────────┼───────────────────┤
│ accountId       │ 1234              │
│ accountemail    │ 'ymail@pmail.com' │
│ accountpassword │ '67890'           │
│ accountCity     │ 'Los Angeles'     │
└─────────────────┴───────────────────┘
 */

console.table([accountId, accountemail, accountpassword, accountCity, accountState])
/*
    Array Format:
    
    in index table start with index values like 0,1,2... 

┌─────────┬───────────────────┐
│ (index) │ Values            │
├─────────┼───────────────────┤
│ 0       │ 1234              │
│ 1       │ 'ymail@pmail.com' │
│ 2       │ '67890'           │
│ 3       │ 'Los Angeles'     │
└─────────┴───────────────────┘
*/
