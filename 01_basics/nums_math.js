// const score=100
// console.log(score);
// const newNumb=new Number(400)
// console.log(newNumb);

// //to make it string
// console.log(newNumb.toString());
// console.log(newNumb.length);
// console.log(newNumb.toFixed(2));

// const balance=78.733
// console.log(balance.toPrecision(2));

// //to represent the zero in proper way
// const hundred=10000000000
// console.log(hundred.toLocaleString());


// +++++++++++++MATHS++++++++++++++++
// console.log(Math);
// console.log(Math.round(4.5));
// console.log(Math.abs(-4));
// console.log(Math.ceil(4.7)); //to max round of value
// console.log(Math.floor(3.55)); //to min round of value
// console.log(Math.max(3,7,3,4));
// console.log(Math.min(3,6,8,32,3));

//to get random value between the 0 to 1
console.log(Math.random());

console.log(Math.random()*10+1); //to get value b/w 1-10
console.log(Math.floor(Math.random()*10+1)); 


//to get the no b/w 10-20 heheheheh ;)
const max=20
const min=10

console.log(Math.floor(Math.random()*(max-min+1))+min);

let newDate=new Date(2023, 0, 23)
console.log(newDate.toDateString());