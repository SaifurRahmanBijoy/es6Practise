const numbers = [2, 8, 4, 6, 3];

function getDoubles(numbers) {
  const output = [];
  for (const number of numbers) {
    const doubled = doubleIt(number);
    output.push(doubled);
  }
  return output;
}

// function doubleIt(number) {
//   return number * 2;
// }

//If we wanna do that in arrow function
const doubleIt = (num) => num * 2;

//মাফ কইরা দেন ও ভাই =========
const makeDouble = numbers.map(doubleIt);
// ছোট করে পুরো জিনিস
const makeDouble2 = numbers.map((x) => x * 2);
console.log('shortcut with map',makeDouble2);

const result = getDoubles(numbers);
console.log('Normal approach',result);
console.log('map using first time',makeDouble);
