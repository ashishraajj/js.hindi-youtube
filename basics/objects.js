// const mysym=Symbol("key1")

// const user={
//     name: "ashish",
//     age: 21,
//     // mysym:"key1",
//     [mysym]: "keyu1",  //this is how we can use a symbol as keyword of object
//     email: "ashish@123",
//     city:"delhi",
//     "full name": "ashish raj"
// }

// console.log(user.name);
// console.log(user["email"]);
// console.log(user["full name"]);
// // console.log(user.mysym);
// // console.log(typeof(user.mysym));
// console.log(user[mysym]);
// console.log(typeof(user.my));

// //TO CHANGE THE VALUE OF OBJECTS
// user.email="ashish@123"

// //THIS IS HOW WE CAN FREEZ THE OBJECTS
// Object.freeze(user)
// user.email="ashish@12345"
// console.log(user);

// //THIS IS HOW WE CAN ADD THE FUNTION TO THE OBJECTS
// user.greetings=function() {
//     // console.log("hello js user");
// }
// user.greetings2=function() {
//     console.log(`hello js user ${this.name}`);
// }

// console.log(user.greetings);
// console.log(user.greetings2);


// ++++++++Object-2+++++++

// const tindruser={}
// tindruser.name="ashish"
// tindruser.age=21
// tindruser.isLoggedIn=false

// console.log(tindruser);

// const regularuser={
//     eamil:"some@gmail",
//     fullname:{
//       userfullname:{
//         firstname:"ashish",
//         lastname:"raj",
//       }
//     }
// }

// console.log(regularuser.fullname.userfullname.firstname);

// //TO COMBINE THE TWO OBJECTS
// const obj1={1:"a", 2:"b"}
// const obj2={3:"a", 4:"b"}

//thats how we can add two objects but it going to murge in nested form 
// const obj3={obj1, obj2}
// console.log(obj3);


//this is the better way to merge the two obj
// const obj3=Object.assign({}, obj1, obj2)
// console.log(obj3);


//WE CAN USE THE SPREAD OUT OPREATORS METHOD TO MERGE THEM
// const obj3={...obj1, ...obj2}
// console.log(obj3);

//to get the keys/values/enteries of the obj
// console.log(Object.keys(tindruser));
// console.log(Object.values(tindruser));
// console.log(Object.entries(tindruser));//here enteries basiclly convert all the keys into the array



// +++++++++++BOJECTS-3+++++++++++++
//DE-STRUCTURE of the objects

const course={
  courseName:"js in hindi",
  coursePrice: 4999,
  courseInstructor:"hitesh sir",
}

//if we need to access any key from the object then we have to write the entire 'course.courseName' many times
//to solve this we can write 'const {courseName}=course' like this we need to write the courseName in the 
//code to access the data and key

const {courseInstructor}=course
console.log(courseInstructor);