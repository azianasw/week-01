const number = [1,2,3,5,4]
const number1 = [6,7,8,9,10]

const gabung = number.concat(number1)

const gabung1 = [...number,...number1,11,12,13]

number.pop()

console.log(gabung);
console.log(gabung1);

const program1 = ["java","js","pyrhon","sql","oracle","postgress","oracle"]
const sql1 = program1.indexOf('sql')
console.log(program1.includes('react'));
console.log(program1.lastIndexOf("oracle"));
console.log(sql1);

console.log(number.find(e => e > 3));

//distructuring array

const program = ["java","js","pyrhon","sql","oracle","postgress"]
const [java,pyhton,js,sql,...database] = program


