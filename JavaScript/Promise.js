const promiseOne=new Promise(function(resolve,reject){
  //Do an async task
  setTimeout(function(){
    console.log('Asyan task Complete');
    resolve()
  },1000)
})
promiseOne.then(function()
{
  console.log("Promise Consumed");
})

// 2nd Type

new Promise(function(resolve,reject){
  setTimeout(function(){
    console.log("Async task 2")
    resolve()
  },1000)
}).then(function(){
  console.log("Async 2 resolved")
})




const promiseThree=new Promise(function(resolve,reject){
setTimeout(function(){
resolve({username:"Avii", email:"kaviikumar010@gmail.com"})
},1000)

})
promiseThree.then(function(user){

console.log(user);
})


const promiseFour=new Promise(function(resolve,reject){
setTimeout(function(){
  let error=false 
  if(!error)
  {
    resolve({username:"Avneesh",password:"123"})
  } else
  {
    reject('Error Something wrong')
  }
},1000)
})

promiseFour.then((user)=>{
console.log(user);
return user.username
})
.then((username)=>{
console.log(username);
})
.catch(function(error){
    console.log(error);
})
fetch('https://api.github.com/users/avneeshk021')
.then((response)=>{
return response.json()
}).then((data)=>{
console.log(data);
})
.catch((error)=>console.log(error))

