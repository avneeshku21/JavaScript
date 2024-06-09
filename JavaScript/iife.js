//Immediately Invoked Function Expression (IIFE)
//Named IIFE
// (function chai()
// {

//     console.log(`DB Connected`);
// })();
//Globel scope k popultion ko haatne ka liye IIFEE ka use kiya hai

//Unknow IIFE
// ((name)=>{
//     console.log(`Db Connected Two ${name}`);
// })
// ("Avneesh")

//+++++++++++++++Important for Interview
// ++++++++++++++++++JavaScript Executi Context+++++
/* 
1 Global Execution Context
2 Functional Execution Context
3 Eval Exceution Context

{}----- Memory Creation Phase

let val1=10
let val2=5
function addNum(num1,num2)
{
    let total=num1+num2
    return total
}
let result1= addNum(val1,val2)
let result2=addNum(10,2)
console.log(result2)



++++++++++++ Call Stack +++++++++++++++++++
Lifo concept
*/
