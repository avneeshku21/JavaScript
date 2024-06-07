//DataTypes
// 1 Number
// 2 String 
// 3 Boolean
// 4 undefined
// 5 null
// 6 BigInt
// 7 Symbol



console.log(typeof(7))
console.log(typeof("Hello")) 
console.log(typeof(~6))// number
console.log(typeof(+'avneesh'))// NaN
console.log(parseInt('1010hsh'))// only give number

// How to convert number to string
console.log(typeof(100+''))// string
// How to convert string to Number
console.log(typeof(+"avneesh"))// number

/************* boolean********* */ 
// true=1 and False=0
console.log(1.9999999999999999)// 2

/******* Undefiend*********/
console.log(+undefined)// NaN
console.log(typeof(-undefined))// number
console.log(typeof(undefined))

/* Null ****/
console.log(+null)
console.log(typeof(+null))
