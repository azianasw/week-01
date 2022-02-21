const foods = ["sup","pizza","pasta"]
console.log(foods);

// foods.push("Indomie")
// foods.pop()
// foods.unshift("Seblak")
foods.shift()
foods.shift()
foods.splice(1,1)
console.log();

const student = [
    {name : "code"},
    {name : "academy"}
]
console.log(student);

if (Array.isArray(foods)) {
    console.log("Foods is array");
}

console.log(foods[0]);

for (let index = 0; index < foods.length; index++) {
    console.log(foods[index]);
}
const number1 = [23,33,44,66]
const number  = [32,2,5,65,232,55]

number.forEach(e => console.log(e))

for (const el of number) {
    console.log(el);
}
const angka = number.map(el => {
    console.log(el);
})
const number2 = number
const permanent = Array.from(number)
number.length=0
console.log(number.concat(number1));
console.log(number.sort());
const sort = number.sort((a,b)=>a>b?1:-1)
console.log(sort);
console.log(number.reverse());
console.log(number2);
console.log(permanent);

