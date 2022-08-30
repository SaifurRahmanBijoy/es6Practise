const numbers = [12, 5, 23, 45, 11, 18, 9, 55, 61, 1];
const fivesFindBy = numbers.find((number) => number % 5 === 0);
const fivesFilterBy = numbers.filter((number) => number % 5 === 0);
console.log(fivesFindBy);
console.log(fivesFilterBy);

const products = [
  { id: 1, name: "laptop", price: 45000 },
  { id: 1, name: "iphone", price: 80000 },
  { id: 1, name: "watch", price: 35000 },
  { id: 1, name: "tablet", price: 25000 },
];
