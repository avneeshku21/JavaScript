function SetUsername(username)
{
    this.username=username
}
function creatUser(username,email,password)

{
    SetUsername.call(this,username)
    this.email=email
    this.password=password
}


const chai =new 

creatUser("Chai","chai@gmail","123")
{
    console.log(chai);
}