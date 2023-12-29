// // let a=334
// // const b=839
// // var c=937

// if (true) {
//     let a=334
// const b=839
// var c=937
// }

// // console.log(a);
// // console.log(b);
// console.log(c);


// +++++++++++++Scope-2++++++++++++

function one() {
    const name="ashish"
    function two() {
        const web="youtube"
        console.log(name);
    }
    console.log(name);
    two()
}

//here curly brackests are use to determine the scop of the variables

one()