//var c = 300

//2 important things in the scope 
//1. The global scope - everything outside of functions is part of this scope
//2. The local/block scope - everything inside {} of functions is part of this scope
{
    //this is block scope 
}
// we can access var from anywhere in the code because it gets defined in the global scope
// this is not in the case of let and const they are block level scope, we can not access them out of the scope 
//


let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}



// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()

}

// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++

//this is normal function defination 
console.log(addone(5))
function addone(num){
    return num + 1
}


//this is expression in js
//the variable holds the value and treat as the function vaiable 
// we can not called the function in expression before defining it
//addTwo(5)
const addTwo = function(num){
    return num + 2
}
addTwo(5)//-- this will work
/*(base) ashishyadav@Ashishs-MacBook-Air jsFunctions % node scope.js
6
/Users/ashishyadav/Code Repo/jS Interview Preparation/jsFunctions/scope.js:67
addTwo(5)
^

ReferenceError: Cannot access 'addTwo' before initialization
    at Object.<anonymous> (/Users/ashishyadav/Code Repo/jS Interview Preparation/jsFunctions/scope.js:67:1)
    at Module._compile (node:internal/modules/cjs/loader:1376:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1435:10)
    at Module.load (node:internal/modules/cjs/loader:1207:32)
    at Module._load (node:internal/modules/cjs/loader:1023:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:135:12)
    at node:internal/main/run_main_module:28:49

Node.js v20.10.0*/