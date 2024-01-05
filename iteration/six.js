
//FORECACH DONT RETURN THE VALUES
// const coding=["java", "cpp", "python", "java Script"]
// const lang=coding.forEach((val) => {
//     console.log(val);
// });

// console.log(lang);


//FILTER(): filter is basically return the values here we have to give the condition with 
//filter(()=>condtion)
// const nums=[1,2,3,4,5,6,7,8,9,10]
// const newnums=nums.filter((val)=>val>4)
// console.log(newnums);

// const newnums=nums.filter((val)=>{
//     //below would not work we have to write return before the statment 
//     // val>4

//     return val>4
// })



const book=[
    { title:"book1", genre:"fiction", publish:1990, Edition:2004},
    { title:"book2", genre:"thrillar", publish:1990, Edition:2004},
    { title:"book3", genre:"Comedy", publish:1995, Edition:2004},
    { title:"book4", genre:"fiction", publish:1990, Edition:2008},
    { title:"book5", genre:"Comedy", publish:1995, Edition:2004},
    { title:"book6", genre:"thrillar", publish:1992, Edition:2008},
    { title:"book7", genre:"fiction", publish:1990, Edition:2004},
    { title:"book9", genre:"fiction", publish:1995, Edition:2008},
    { title:"book8", genre:"comedy", publish:1990, Edition:2004},
    { title:"book1", genre:"fiction", publish:1992, Edition:2010},
]

//THIS IS REAL TIME BASED WAY OF ACCESING THE SAME GENRE BOOKS USING FILTER()
// const bk=book.filter((val)=>val.genre==="fiction")
let bk=book.filter((val)=>val.genre==="fiction")
bk=book.filter((val)=>val.publish>1990)
// console.log(bk);



//THIS IS HOW WE CAN ADD 10 IN EACH MEMBER OF ARR
const arr=[1,2,3,4,5,6,7,8,9,10]
// const myarr=arr.map((num)=>num+10)
// console.log(myarr);

//THE METHOD OF CHAINING
// const myarr=arr.map((num)=>num*9).map((num)=>num+1).filter((num)=>num>50)
// console.log(myarr);




// const mynum=[1,2,4,5]
// const num=mynum.reduce(function (acc,curval) {
//     console.log(`acc value ${acc} curvalue is ${curval}`);
//     return acc+curval
// },0)

//TO WRITE THE ABOVE THING IN TERMS OF ARROW FUNTION
// const mynum=[1,2,4,5]
// const num=mynum.reduce((acc, curval)=>acc+curval, 0)
// console.log(num);



const shoppingcart=[
    {
        name:"shoes",
        price:2999,
    },
    {
        name:"washing machine",
        price:29999,
    },
    {
        name:"shockes",
        price:999,
    },
    {
        name:"pant",
        price:999,
    },
    {
        name:"phon",
        price:29999,
    },
]


//we have 0 in accumulator initially 
const shop=shoppingcart.reduce((acc, item)=>acc+item.price, 0)
console.log(shop);