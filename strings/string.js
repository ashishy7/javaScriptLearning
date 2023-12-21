const name = "hitesh"
const repoCount = 50

// console.log(name + repoCount + " Value");
//below is ths string literals
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('hitesh-hc-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));//-- return charAt index 2 else -1
console.log(gameName.indexOf('t'));//-- return indexof value t else -1

const newString = gameName.substring(0, 4)
console.log(newString);
//hite

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);
//nothing print here

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))//-- replace the source with target

console.log(url.includes('sundar'))// 

console.log(gameName.split('-'));