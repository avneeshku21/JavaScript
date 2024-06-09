// const user={
//     username: "Avneesh",
//     price: 999,
//     welcomemessage: function()
//     {
//         console.log(`${this.username},Welcome to Website `);
//         //console.log(this);
//     }
// }
// // this keyword current context ko reffer krta hai
// // user.welcomemessage()
//  //user.username="Avii"
// // user.welcomemessage()
// console.log(this);

//++++++++IMportant+++++++++++++++++
//Brwoser k ander jo Object hai  bo hai Windwo object Node k ander Object Empty hota hai

// function chai()
// {
//     console.log(this);
// }
// chai()

//+++++++++++++++++++NOrmal function
//  const chai =function()
//  {
//     let username ="Avii"
//     console.log(this.username);
//  }

//+++++++++++++Arrow function++++++++++++++
// const chai=()=>{
//     let username="Avneesh"
//     console.log(this);
// }
// chai()
//+++++++++++++ Case1 +++++++++++++++++++++++++
// Expliciate return
// const addone = (num1,num2)=>{    
//     return num1+num2
// }

//+++++++++++++++++ Case2 +++++++++++++++++++++++
// const addone=(num1,num2)=>(num1+num2)

// console.log(addone(3,4));
// const myArray=[2,3,4,5,6]
// myArray.forEach(()=>{})