class User{
    constructor(username){
        this.username=username
    }

    logMe(){
        console.log(`Username is ${this.username}`);
    }
}
class Teacher extends User{
    constructor(username,email,Password){
        super(username)
        this.email=email
        this.Password=this.Password

    }
    addCourse(){
        console.log(` A new Course was added by ${this.username}`);
    }
}
const chai = new Teacher("Avneesh","avneeesh@gmail","123")
console.log(chai);
 chai.addCourse()