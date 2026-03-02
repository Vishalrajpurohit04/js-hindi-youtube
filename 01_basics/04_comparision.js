// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log("2" > 1);
// console.log("02" > 1);

console.log(null > 0);//false
console.log(null == 0);//false
console.log(null >= 0);//true

// the reason is that equallity == and comparisons > >= < <= work differently.comparison convert null into number and treat its as 0. thats why null >= 0 is true

console.log(undefined == 0);//undefined
console.log(undefined > 0);//undefined
console.log(undefined < 0);//undefined

// === => its check both type and value for a data type

console.log("2" === 2);//false
