
//below is the example of object literal 
//object is called object literals
const user = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        //console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);-- "print hitesh"
        console.log(this);// this will print whole object -- represent the current context in the object
    }

}



//console.log(user.username)
//console.log(user.getUserDetails());
// console.log(this);----{}empty object 


function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }

    return this
}

const userOne = new User("hitesh", 12, true)
const userTwo = new User("ChaiAurCode", 11, false)
console.log(userOne.constructor);
//console.log(userTwo);

// new key word working process to create instance of the object through construction
//  step 1 - create a empty object
//  step2 - construction function gets called and it will back everything in the empty object
//  that we have created using 'new' keyword -- all the attribute attached to the object 
//  step3 - return the object attaching "this" keywords
//1- it calls a constructor function
//2- It sets up the newly created objects properties by referencing the constructors property
//3- The constructor function returns the newly created object if any value other than null or undefined is returned then that value will be used instead of the

