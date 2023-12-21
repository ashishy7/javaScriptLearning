
// Promise
// the promise object represents the eventual completion of an asynchronous operation
// and its resulting values

states of promise

1. Pending: initial state, neither fulfilled nor rejected
2. Fulfilled: success callback is called with the result as argument
3. Rejected: failure callback is called with the error as argument
4. Resolved: also infulfilled, but means that a promise has been resolved by another promise (thennable), not user action
4. Resolved: the current handler (onFulfilled or onRejected) has finished successfully

a new handler can be added to resolve/reject the promise again
Promise.all() returns a single promise that resolves when all of the input promises have resolved. It rejects if any of the promises
Promise constructor takes a single argument executor function which is called immediately
with two arguments: resolve and reject functions
resolve(value): calls the success callback with value as argument
reject(error): calls the failure callback with error as argument
the then method returns another promise:
then(onFulfilled, onRejected)
if the promise is fulfilled, onFulfilled will be called with the value passed to resolve
if it’s rejected, onRejected will be called with the reason passed to reject
both onFulfilled and onRejected are optional, if not provided, they default to identity
they can return a value that will become the resolution value of the returned promise
promises are chainable using the then method
each call to then returns a new promise
when a promise is resolved with another promise, the first promise waits for the second one to settle
and then transitions to the same state as the second promise
this allows handling of chains of promises
an unhandled rejection happens when a promise is rejected but there's no onRejected callback registered
to handle this situation, we should always attach at least a dummy onRejected callback

const promiseOne = new Promise(function(resolve, reject){
    //Do an async task
    // DB calls, cryptography, network  
    setTimeout(function(){
        console.log('Async task is compelete');
        resolve()
    }, 1000)
})

promiseOne.then(function(){
    console.log("Promise consumed");
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    }, 1000)

}).then(function(){
    console.log("Async 2 resolved");
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Chai", email: "chai@example.com"})
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user);
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "hitesh", password: "123"})
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

 promiseFour
 .then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected"))



const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

//getAllUsers()

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))

// promise.all
// yes this is also available
//fetch is the new feature which available to avoid call back hell in the XMLhttprequest
// fetch is the process to request the resource and return the proimse which fullfill once the response is available
//promise only reject when network error is occurs 
// error code 404 after fail of api goes into response not in reject
// reject come in picture only when the api call is not happened at all