// //primitive

// // string , Number, boolean, Null, undefined, symbol, bigint

// //Refrensh(Non-primitive)

// const score=8
// const scorevalue=34.3

// const isLoggedin=false
// const outsideTemp=null
// let userEmail;

// const id=Symbol('123')
// const anotherid=Symbol('123')
// console.log(id===anotherid);


// //this is how we represent bigint
// const bigNumber=83898305042974820n

// //array
// const heros=["saktiman", "nagraj", "doga"]


// //object will be always in curly brackets
// let me={
//     name: "ashish",
//     age: 21,
// }

// const myFunction= funtion(){
//     console.log("hello world");
// }

// console.log(typeof heros);



// Memory+++++++++++++++++++++++++++++++++++++++++++++
let myName="ashish"
let anotherName = myName

anotherName="ashishraj"

console.log(myName);
console.log(anotherName);

let userOne={
    email: "ashish@123",
    upi: "djfgj@123",
}

let userTwo=userOne

userTwo.email="raj@123"

console.log(userOne.email);
console.log(userTwo.email);