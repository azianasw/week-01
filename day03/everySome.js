const number = [1,2,3,4,5,6,6,5,4]

const every = number.every(el => el % 2 === 0)

const some = number.some(e => e % 2 === 0)

console.log(every);
console.log(some);

const set = new Set(number)
const add = set.add(10)
const deleted = set.delete(4)
const clear = set.clear()
console.log(deleted);
console.log(add);
console.log(set);
console.log(clear);
console.log();

const carts = new Map()
carts.set(1,"indomie")
carts.set(2,"sarimi")
carts.set(3,"mie Sedaap")
carts.set(1,"indomie")
console.log(carts);