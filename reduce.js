const numbers = [1, 2, 3, 4, 5];
// .reduce(accumulatorFunction, initialValue)
// accumulatorFunction use two parameters

const total =numbers.reduce((pre,cur)=>pre+cur,0);
console.log(total);