function myname()
{
    console.log("Avneesh");
    console.log("Kumar");
}
//myname()
// function sum(num1,num2)
// {
//     // let result =num1+num2
//     // return result
//     return num1+num2
// //console.log(num1+num2);

// }
// const result=sum(3,4)
// console.log(result);
// function loginuser(username){
    // if(username===undefined)
    // {
    //     console.log("Please enter username")
    //     return
    // }
    // return `${username} Just Log In`
//}
// console.log(loginuser())

function cartprice(val1,val2,...num1){
    return num1

}
//console.log(cartprice(200,200,400));
const user ={
    name:"Avneesh",
    age:21
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.name} Age is ${anyobject.age}`);
}
//handleObject(user)
handleObject({
    name:"avneesh",
    age:21
})
const mynewArray=[200, 300, 400]
function returnSecValue(getArray)
{
    return getArray[1]
}
console.log(returnSecValue(mynewArray))