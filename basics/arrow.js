// const user={
//     name:"ashish",
//     age:21,
//     welcomemsg:function(){
//         //we use this to access the current contex(content or var in the {} or locar var)
//         console.log(`${this.name} welcome to the funtion`);
//     }
// }

// user.welcomemsg()
// user.welcomemsg="sam"
// user.welcomemsg()

// user.welcomemsg(this)

//THIS IS FOR INCLUDING THIS IS FUNC
// function chai() {
//     console.log(this);
// }
// chai()


//THIS IS HOW WE CAN DEFINED THE ARROW FUNTION
// const chai=()=>{
//     user:"ashish"
//     console.log(`${this.user} this is new function`);
// }
// chai()


// const Add=(num1, num2)=>{
//   return num1+num2
// }

// //this code can also written as 
// //const Add=(num1, num2)=>num1+num2
// console.log(Add(4,5));

// +++++++++++ARROW-2+++++++++++++++
function chai(){
    console.log(`DB CONNECTED`);
}

chai()


((name)=>{
    console.log(`DB CONNECTED TO ${name}`);
})('ashish')