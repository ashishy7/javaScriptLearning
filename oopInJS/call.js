function SetUsername(username){
    //here we want setuserName to use calling function context not its own context 
    // this will come from the createUser function and we can use that this to set the values
    //complex DB calls
    this.username = username
    console.log("called");
}
// in call we pass current function context to another function with this key word
function createUser(username, email, password){
    SetUsername.call(this, username)
   //call function used to call the function forcefully(explicitly) and pass the current function context to another function

    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@fb.com", "123")
console.log(chai);

//call use and different example
const ashish={
    name:"Ashish",
    age:25,
    work:"developer"
}
function job(){
    print = `my name is ${this.name} and my age is ${this.age}`
    console.log(print)
}
job.call(ashish,age=24)
func.apply(context ,[arg1,arg2])

//call and apply both work in the same just apply take array of arrguments in the 2 arguemnts
//apply dose not have a third argument it takes only two arguments one for the object and other for the array of args
/*apply works like this
func.apply(context ,[arg1,arg2])*/

//bind
// bind method creates a new function with some predefined arguments
// it does not execute the function but returns a new one
let obj = {
    x : 10,
    y : 20,
    add : function (a , b) {
        return this.x + this.y + a +b;
        }
        };
        obj.add.bind(obj)(5,6)
        //new keyword
        let boundFunc = obj.add.bind(obj,5,6)
        boundFunc()
// bind return one call back function which we can use later
setTimeout(boundFunc,1000)
