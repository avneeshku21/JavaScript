// ++++++++++++++++ SinglTone++++++

//++++++++++++++Object literals

// const Mysym =Symbol("key1")
// const JsUser={
//     name:"Avneesh",
//     "Fullname":"Avneesh Kumar",
//     [Mysym]: "key1",
//     age: 21,
//     location: "Bareilly",
//     email: "kaviikumar010@gmail.com",
//     lastloginDays:["Monday","Tuesday"]
//}//Object

// console.log(JsUser.email);
//  console.log(JsUser["Fullname"]);
// JsUser.email="Avneesh@gmail.com"
// Object.freeze(JsUser)
// JsUser.email="abhi@gmail.com"
// console.log(JsUser)
// JsUser.greeting =function()
// {
//     console.log("Radhe Radhe");
// }
// console.log(JsUser.greeting());
// JsUser.greetingtwo =function()
// {
//     console.log(`Radhe Radhe, ${this.Fullname}`);
// }
// console.log(JsUser.greetingtwo());

//+++++++++++++++Object+++++++++++++++++
//Here we start Object with the help of Singletone and Constructor


//const tinderUser=new Object() //Single tone Object
const tinderUser={}
 // Non singletone Object
 tinderUser.tinderUser="123"
 tinderUser.name ="Avii"
 tinderUser.isloggedIn =false
//console.log(tinderUser);
const regularUser ={
    email:"avneeshk010@gmail.com",
    fullname:{
userfullname:{
    Fname: "Avneesh",
    Lname: "Kumar"
}
    }
}
//console.log(regularUser.fullname.userfullname)

//Merge OBject Here

const obj1={1:"a",
2: "b"
}
const obj2 ={
    3: "X",
    4: "Y"
}
//const obj3= Object.assign({},obj1,obj2)
// const obj3={...obj1,...obj2} //spread operator
// console.log(obj3)
console.log(tinderUser)
//important 
console.log(Object.keys(tinderUser));// Important
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));