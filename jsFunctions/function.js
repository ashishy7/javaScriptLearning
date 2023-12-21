
function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}
//sayMyName-- this will one return the reference of the functions
// sayMyName()-- this is function calling



function addTwoNumbersWithoutreturn(number1, number2){
       console.log(number1 + number2);
    }
    const result = addTwoNumbersWithoutreturn(3, 5)//--function calling -- it has function arguments
  //out put-  8  Result:  undefined


//below is function defination (which take holds parameters)
function addTwoNumbersWithReturn(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
}


const result2 = addTwoNumbersWithReturn(3, 5)//--function calling -- it has function arguments

console.log("Result2: ", result2);
//8
//Result2:  8


function loginUserMessage(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("hitesh"))
// console.log(loginUserMessage("hitesh"))

{
    //here num1 is a rest operator which take multiple values form the calling function
    //  real time example - online shopping cart production add 
    // we are not sure how much prouct user is going to add in the cart rest operator will take all the values 
    function calculateCartPrice(val1, val2, ...num1){
        return num1
    }
    
    // console.log(calculateCartPrice(200, 400, 500, 2000))-- it will return and print array value in nums1
}


const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));