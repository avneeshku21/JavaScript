
/*********************All about Strings**************
 
 Property 






 Method
 toUpperCase()
 toLowercase()

Methods with aruguments
includes()
indexof()
replace()
replaceAll()
concat()
padStart()
padEnd()
charAt()
charCodeAt()
split()




 
 String Method - charAt:

javascript
Copy code

console.log("Hello".charAt(1)); // "e"


***********String Method - split:

javascript
Copy code

console.log("Hello, World!".split(", ")); // ["Hello", "World!"]


****************Array Method - push:

javascript
Copy code
let arr = [1, 2, 3]; arr.push(4); console.log(arr); // [1, 2, 3, 4]
******************Array Method - pop:

javascript
Copy code
let arr = [1, 2, 3]; arr.pop(); console.log(arr); // [1, 2]
Array Method - join:

javascript
Copy code
console.log([1, 2, 3].join('-')); // "1-2-3"
******************Array Method - filter:

javascript
Copy code
console.log([1, 2, 3, 4].filter(x => x % 2 === 0)); // [2, 4]
********************Array Method - reduce:

javascript
Copy code
console.log([1, 2, 3, 4].reduce((sum, x) => sum + x, 0)); // 10
******************Object Method - values:

javascript
Copy code
console.log(Object.values({name: "Alice", age: 30})); // ["Alice", 30]

*********************Math Method - sqrt:

javascript
Copy code
console.log(Math.sqrt(16)); // 4

***********Math Method - random:

javascript
Copy code
console.log(Math.random()); // Random number between 0 and 1


***************Date Method - getFullYear:

javascript
Copy code
console.log(new Date().getFullYear()); // Current year, e.g., 2024


***************Date Method - getMonth:

javascript
Copy code
console.log(new Date().getMonth() + 1); // Current month (0-based, so add 1)


*****************Date Method - getDate:

javascript
Copy code
console.log(new Date().getDate()); // Current day of the month
 
 
 




*************************** */
// console.log(Math.random());
// console.log([1, 2, 3]
//     .map(x => x * 2));
// console.log(new Date().toISOString());// it give exact date and time
// const user='Avneesh Kumar'
// console.log(user[0])
// console.log(user.length)
// console.log(user.toUpperCase())// it create a copy
// console.log(user.trim())
// console.log(new Date().getDate());

// console.log(new Date().getMonth() + 1);

const newUser='        Hi I am Avneesh     '
console.log(newUser)
console.log(newUser.trimStart())
const final=newUser.trim()

console.log(final.includes("am"))// its check the value present or not
