const user={
    username:"Avneesh",
    loginCount:8,
    singedIn:true,

    getUserDetails:function(){
       // console.log("Got user details from database");
       //console.log(`username:${this.username}`);
       console.log(this);
    }
}

const user2={
    username:"Avii",
    age:21,
    Gender:"male",
    
    getUserDetails: function(){
        console.log(this)
    }
}

//console.log(user.username);
//console.log(user.getUserDetails);
//console.log(user2.username);

//const promiseOne=new Promise()
//------"New" key word is a Constructor Function ye sirf allow krta hai ki ek hi Object se multiple instances bana sko--

function User(username,loginCount,islLoggedIn){
    this.username=username
    this.loginCount=loginCount
    this.islLoggedIn=islLoggedIn

    return this

}
const userOne=new User("Avneesh",12,true)
const userTwo=new User("Avii",12,true)
console.log(userOne.constructor);
//console.log(userTwo);