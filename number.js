const n = 150.86
console.log(typeof n);

console.log(parseFloat(n));

console.log(parseInt(n));

const num = "3.12453"
console.log(Number(num));

const a = "hello"
console.log(Number(a));

const price = 150.9849563
console.log(price.toFixed(2));

let currency = new Intl.NumberFormat('ID',{style:'currency',currency:'IDR'}).format(price)

console.log(currency);

console.log(isNaN(price));
console.log(isNaN('hallo'));