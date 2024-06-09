
/********************Math Opertor
 1 Addition +
 2 Subtraction -
 3 Multiplication *
 4 Division /
 5 Remainder/ Modulo %
 6 Exponentiation**
********************* */
//*****Exponetiation***** */ 

// b= 15**2
// a=2**10
// console.log(a)

let b = Math.sqrt(-9);
console.log(b)

//power function
let a=Math.pow(2,6)
console.log(a)
//Math.SQRT2
function getRoot2() {
    return Math.SQRT2;
  }
  
  console.log(getRoot2());

  // Math Floor
  let c=Math.floor(-2.99)// -3
  console.log(c)
  let d=Math.ceil(-2.99)//-2
  console.log(d)
  let e=Math.round(2.5)
  console.log(e)
  let random=Math.floor(Math.random()*10)
  console.log(random)

  function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  
  
  const rndInt = randomIntFromInterval(10, 20);
  console.log(rndInt);

