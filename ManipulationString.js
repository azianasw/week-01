let firstname = "asep"
console.log(firstname);

let a = firstname + '\tsunandar'
console.log(a);

let b = a + '\nsebagai dalang'
console.log(b);

let dalang = 'wayang golek'
dalang = `${b.replace("dalang","")} ${dalang}`
console.log(dalang);

let golek = 'cepot'
golek = golek.split('')
console.log(golek[2]);

let golek1 = golek.join('*')
console.log(golek1);