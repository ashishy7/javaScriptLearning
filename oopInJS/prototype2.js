// let myName = "hitesh     "
// let mychannel = "chai     "

// console.log(myName.trueLength);


let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.hitesh = function(){
    console.log(`hitesh is present in all objects`);
}

Array.prototype.heyHitesh = function(){
    console.log(`Hitesh says hello`);
}

// heroPower.hitesh()
// myHeros.hitesh()
// myHeros.heyHitesh()
// heroPower.heyHitesh()

// inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport//--- this how you create inheritance in js --TAsupport has access to all the properties of Teachingsupport
}

Teacher.__proto__ = User//--- this a empty prototype to access all the values and create inheritance in js

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)//--- this syntax use to create parent -> child relation  betweem the teachers -> TeachingSupport
// we ae directly attaching everything to object level so this property will set for every method 

let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}//--- creating our own method properties in the string object to access it every where--custome method 

anotherUsername.trueLength()//-- calling our own object
"hitesh".trueLength()
"iceTea".trueLength()