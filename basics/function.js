// function myName() {
//     console.log("A");
//     console.log("S");
//     console.log("H");
//     console.log("I");
//     console.log("S");
//     console.log("H");
// }

// myName()

// // function addNumb(numb1, numb2){
// //     console.log(numb1+numb2);
// // }
// // addNumb(4,6)

// function addNumb(numb1, numb2){
//     // let result=numb1+numb2;
//     // return result;

//     // OR
//     return numb1+numb2
// }
// const result=addNumb(4,6)
// // console.log("Result", result);


// function loginuser(username){
//     if (username===undefined) {
//         console.log("please enter the user name");
//     }
//     return `${username} just logged in`
// }

// const func=loginuser()
// console.log(func);


// +++++++++++++++++FUNTION-2+++++++++++++++++

// function CalculateCartPrice(numb1) {
//     return numb1
// }
// console.log(CalculateCartPrice(300));
// console.log(CalculateCartPrice(300, 200, 400, 100));//there is only one argument but here in 
//fuct calling ther is 4 arguments so to deal with this problem we use spread opreatores

// function CalculateCartPrice(...numb1) {
//     return numb1
// }
// console.log(CalculateCartPrice(200, 300, 100, 500));


const user={
    userName:"ashish",
    price:999,
}

//this is how we can include a object in our function
function handleObject(obj) {
    console.log(`user name is ${user.userName} and price is ${user.price}`);
}

handleObject(user)


    
//another way of passing obj to function
// handleObject({
//     userName:"ashish",
//     price:999,
// })

//TO PASS THE ARRAY THROW THE FUNCTION
const arr=[23,56,34,77]
function passarray(arr) {
    return arr[1]
}
console.log(passarray(arr));