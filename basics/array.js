// const myArray=[2,4,6,7,1]
// const newArray=["ashish", "ketan", "raj"]
// const myArray2=new Array(3,5,6,2,1)

// console.log(myArray[0]);


// //Array method
// // myArray.push(9)
// // myArray.push(10)
// // console.log(myArray);

// // myArray.pop()
// // console.log(myArray);

// myArray.unshift(8)
// console.log(myArray);

// myArray.shift()
// console.log(myArray);

// console.log(myArray.includes(9));
// console.log(myArray.indexOf());

// const myArray=[2,4,6,7,1]
// // const newarrr=myArray.join()
// // console.log(myArray);
// // console.log(myArray);
// // console.log(typeof myarrr);

// //slice, splice
// console.log("A", myArray);
// const myn1=myArray.slice(1,3)
// console.log(myn1);

// console.log("B", myArray);

// const myn2=myArray.splice(1,3)
// console.log("C", myArray);
// console.log(myn2);


// ++++++++ARRAY PART-2+++++++++
const dc_heros=["thor", "ironmen", "loucky"]
const marval_heros=["hella", "wonderwomen"]
// dc_heros.push(marval_heros)
// console.log(dc_heros);

//to murge the two array
// const newarray = dc_heros.concat(marval_heros)
// console.log(newarray);

//TO SPREAD ALL THE ELEMENT TO ARRAY
// const all_new_array=[...marval_heros, ...dc_heros]
// console.log(all_new_array);

const arr1=[2.4[5,2],[3,6,9[3,8]]]
const arr2=arr1.flat(Infinity)
console.log(arr2);

//TO CHECK OR MAKE ARRAY
console.log(Array.isArray("ashish"));
console.log(Array.from("ashish"));
console.log(Array.from({name:"ashish"}));

let score1=283
let score2=466
let score3=134
let score4=983
console.log(Array.of(score1, score2, score3, score4));

