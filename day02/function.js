//reguler function

function name() {
    return 'halo'
}

console.log(name());

//reguler function with parameter

let counter = 5
function reg(n) {
    counter+=1
    return n+" "+counter
}
console.log(reg('codeid'));

//callback function
function one() {
    console.log('start');
}
function four(gear) {
    console.log(`gear ${gear}`);
}

function play(go) {
    go()
    four(3)
}
play(one);

//anonymous function
function play1() {
   setTimeout(function(){
        console.log('go');
    },1000)
}
play1()

//arrow function
const two = () => {
    console.log('start3');
}

function play3(go1) {
    go1()
}
play3(two)