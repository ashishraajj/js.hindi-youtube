//if statement

// const userlogin=true
// if (userlogin) {
    
// }

// if (6>=2) {
//  console.log("executed");   
// }

// if (4=='4') {
//     console.log("ashish");
// }

// if (4==='4') {
//   console.log("ashish");   
// }

//out of scop we cant access the var
// const power=200;
// if (100<power) {
//     console.log(`100 is smaller then ${power}`);
// }

// console.log(`100 is smaller then ${this.power}`);


//another way of writing the code
// const power=200;
// //this is how we can excute the if statement in single line
// if(100<power) console.log(`100 is smaller then ${power}`);

// //this is how we can write if in 2 lines, we dont prefer
// if(100<power) console.log(`100 is smaller then ${power}`),
// console.log("hehehe");


//NESTED IF ELSE
// const power=800
// if (power<500) {
//     console.log("this is less then 500");
// }else if (power<750) {
//     console.log("this is less then 750");
// } else {
//     console.log("this is greator then 750");
// }

const userlogg=true
const dabit=true
if (userlogg&&dabit) {
    console.log("allow to buy course");
}
else{
    console.log("dont allow him to buy course");
}