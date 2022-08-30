// const fiveTimes = [1, 2, 3, 4, 5].map((x) => x * 5);
// console.log(fiveTimes);

const products = [
  { id: 1, name: "laptop", price: 45000 },
  { id: 1, name: "iphone", price: 80000 },
  { id: 1, name: "watch", price: 35000 },
  { id: 1, name: "tablet", price: 25000 },
];
// const items = products.map((product) => console.log(product.name));

const items = products.map((product) => product.name);
console.log(items);
