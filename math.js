function number(n) {
    return Math.sqrt(n)
}

console.log((number(9)));

function number1(n,a) {
    return Math.pow(n,a)
}

console.log((number1(2,3)));

function number2(n) {
    return Math.round(n)
}

console.log((number2(53.55)));

function number3(n) {
    return Math.floor(n)
}

console.log((number3(53.55)));

function number4(a,b,c,d) {
    return Math.max(a,b,c,d)
}
console.log(number4(1,3,4,15));

function number5(a,b,c,d) {
    return Math.min(a,b,c,d)
}
console.log(number5(1,3,4,15));

let a = Math.random()*10

console.log(a);