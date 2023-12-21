// const tinderUser = new Object()--- this will create a singleton object
const tinderUser = {}//-- also a way to create a object
// asssign differnet key value pair to objects 
tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);
//nested value in the objects
const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

// console.log(regularUser.fullname?.userfullname?.firstname);-- optional channing in the objects

/////////////////////////////////////////////////////////////////////////////////
//array and ojects are mostly same in terms of merging to different array and ojects values
const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

marvel_heros.push(dc_heros)
//[ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]

console.log(marvel_heros);
console.log(marvel_heros[3][1]);//-- access the nested array in the merged array
//flash

const allHeros = marvel_heros.concat(dc_heros)
console.log(allHeros);
[
    'thor',
    'Ironman',
    'spiderman',
    [ 'superman', 'flash', 'batman' ],
    'superman',
    'flash',
    'batman'
  ]


const all_new_heros = [...marvel_heros, ...dc_heros]// ---spread operator 
console.log("spread",all_new_heros)

//nested array to single array 
const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const real_another_array = another_array.flat(Infinity)
console.log("flat array",real_another_array);
//flat array [1, 2, 3, 4, 5,6, 7, 6, 7, 4,5]
/////////////////////////////////////////////////////////////////////////////////////////////

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }
//assign method to combien to object into single object 
//assign(target{}, sources1, sources2, sources3)
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2}//--spread the objects
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));




[
    {},
    {},
    {}
]