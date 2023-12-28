function myName() {
    console.log("A");
    console.log("S");
    console.log("H");
    console.log("I");
    console.log("S");
    console.log("H");
}

myName()

// function addNumb(numb1, numb2){
//     console.log(numb1+numb2);
// }
// addNumb(4,6)

function addNumb(numb1, numb2){
    // let result=numb1+numb2;
    // return result;

    // OR
    return numb1+numb2
}
const result=addNumb(4,6)
// console.log("Result", result);


function loginuser(username){
    if (username===undefined) {
        console.log("please enter the user name");
    }
    return `${username} just logged in`
}

const func=loginuser()
console.log(func);