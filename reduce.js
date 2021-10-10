
const numbers = [1,10,100,1000];

// let sum = 0;

// for (let x = 0; x < numbers.length; x++){
//      sum = sum + numbers[x]
// };

const sum = numbers.reduce(
(x,y) =>{  return x * y }, 0.01
);


console.log(sum)
console.log(numbers[1])