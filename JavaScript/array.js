//++++++++++Decelartion

// const myArr=[0, 1, 2, 3, 4, 5, 6]
//In javaScript Array are resizeable
// console.log(myArr[0]);
// const MyHeros=["Shaktiman,Nagraj"]
// const myArr2=new Array(1,2,3,4,5,6)
// console.log(myArr2[1]);

// ++++++++++++++Array Methods

// myArr.push(8)
// myArr.pop()
//myArr.unshift(0)// it store at ist Index
// console.log(myArr.includes(9));
// console.log(myArr.indexOf(4));

// const newArr=myArr.join()
// console.log(myArr);
// console.log(newArr)

//+++++++++++++++++Slice , Splice+++++++


// console.log("A", myArr)

// const myn1=myArr.slice(1,3)

// console.log(myn1)
// console.log("B",myArr);
// const myn2=myArr.splice(1,3)
// console.log("C",myArr);
// console.log(myn2)
const Marvel=["Ironman","Thor","Spiderman"]
const Dc =["Superman","Batman","Flash"]
// AllHeros=Marvel.concat(Dc)
// console.log(AllHeros)

//+++++++++++Spread operator
// const AllnewHeros=[...Marvel,...Dc]
// console.log(AllnewHeros)

// const anotherarray=[1,2,3,[4,5,6],7,[8,9,[10,11]]]
// const Realarray=anotherarray.flat(Infinity)
// console.log(Realarray)

// console.log(Array.isArray("Avneesh"))
// console.log(Array.from("Avneesh"))

//console.log(Array.from({name:"avneesh"}))// Important for Projects
let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3))
