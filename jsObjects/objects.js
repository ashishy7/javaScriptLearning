// singleton
// Object.create

//there are 2 ways to create the obect in the js 1- constructor 2- object literals 
// constructers create the singleton object

// object literals

//this is the example of symbol to add in the object
const mySym = Symbol("key1")// creating the symbol 


const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1",//this how we add symbol to the object 
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])---when key name is big we can access with brackets
// console.log(JsUser[mySym])--- this is the way to access the symbol

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)---- object gets freeze and we can not make any changes in the object
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);--- will not work as object is freeze

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}
console.log(JsUser.greeting);
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
//output for above 
//[Function (anonymous)]
//Hello JS user
//Hello JS user, Hitesh
