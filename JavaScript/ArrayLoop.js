//for Of LOOP
// ["","","",]
//[{},{},{},]

//  const arr=[1,2,3,4,5]
//  for (const num of arr) {
//     console.log(num);
    
//  }

//  const greetings= "HEllo chai"
//  for (const geet of greetings) {
//  console.log(`Each char ${geet}`);   
//  }

 // Maps
 // Maps Stored Unique value
 /*
 const map =new Map()
 map.set('IN',"India")
 map.set('USA', "United States of America")
 map.set('Fr',"France")
//  console.log(map);

 // yaha pr ham key aur value ko alg alg print kr skte hai ................ Ye Array ka DeStructure hai
 for (const [key,value] of map) {
    console.log(key,"-", value);
    
 }
 */
const myobject={
    game1:"NFS",
    game2:'Spiderman'
}

// for (const [key,value] of myobject) 
// {
//     console.log(key,"-", value);
// }

//++++++++++++++++ For Each Loop+++++++++++
//MOst iMportant
//const coding=["js","C++","C","PHP"]
// coding.forEach( function(val){
//     console.log(val);
// })

// function printMe(item)
// {
//     console.log(item);
// }
// coding.forEach(printMe)

// ++++++++++++Filter Map++++++++++++++++
// const coding=["js","C++","C","PHP"]

// const values=coding.forEach((item)=>{
//     //console.log(item);
//     return item
// })
// console.log(values);

const myNums=[1,2,3,4,5,6,7,8,9,10]
// const newnums=myNums.filter((num)=>{
//     return num>4  
// })

// For     ForEach loop
// const newnums=[]
// myNums.forEach((num)=>{
//     if(num>4){
//         newnums.push(num)
//     }
// })

// console.log(newnums)

// For map
const myNumbers=[1,2,3,4,5,6,7,8,9]
//const NewNUms=myNumbers.map((num)=>{return num+10})

const mycount=myNumbers
.map((num)=> num*10)
.map((num)=> num+1)
.filter((num)=>num>=40)

console.log(mycount);

