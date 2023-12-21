{
    // this whole concept is related to object, and how this behave we objects
    // this holds the object values but not in the case of function
const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        //hitesh , welcome to website
        console.log(this);//---this keywords hold the context of the environment 
        // this --on browser it is window but on local mechine it is hold the different scope 
        /*{
            username: 'hitesh',
            price: 999,
            welcomeMessage: [Function: welcomeMessage]
          }*/
    }

}

user.welcomeMessage()
//we are changing the user name 

user.username = "sam"
user.welcomeMessage()

console.log(this);//---{}

}


 function chai(){
   let username = "hitesh"
  console.log(this);
  /*
  below is the result
  <ref *1> Object [global] {
  global: [Circular *1],
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  queueMicrotask: [Function: queueMicrotask],
  structuredClone: [Getter/Setter],
  atob: [Getter/Setter],
  btoa: [Getter/Setter],
  performance: [Getter/Setter],
  fetch: [Function: fetch],
  crypto: [Getter]
}
  */
console.log(this.username);//----undefined
//learning ---- in the function this doesnot hold the function members and variable as whole value 
// object it hold object member and variables as whole value
}

chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }




// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const exp =  () =>{
    let username="Ashish"
    console.log("arrow function this",this)
  console.log("arrow function this",this.username)
/* out put
  arrow function this {}
arrow function this undefined
we can not use this in the arrow function 
  */

}
exp();


const addTwo = (num1, num2) => 
({username: "hitesh"})


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()