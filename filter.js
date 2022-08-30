const numbers = [12, 5, 23, 45, 11, 18, 9, 55, 61, 1];
const bigNums = numbers.filter((number) => number > 20);
const tinyNums = numbers.filter((number) => number < 10);
// console.log(bigNums);
// console.log(tinyNums);

const products = [
  { id: 1, name: "laptop", price: 45000 },
  { id: 1, name: "iphone", price: 80000 },
  { id: 1, name: "watch", price: 35000 },
  { id: 1, name: "tablet", price: 25000 },
];
const expensive=products.filter(p=>p.price>40000);
console.log(expensive);