const coding=['cpp', 'js', 'java', 'py']


//how to use foreach- loop
//remember here in foreach parameter we hv to give call back funtion(func with no name)
// coding.forEach(function (val) {
//     console.log(val);
// })


// coding.forEach(greet=()=>{})
//dont write name of fucntion
// coding.forEach((value)=>{
//     console.log(value);
// })


coding.forEach((item, index, array)=>{
    console.log(item, index, array);
})