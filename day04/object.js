//declartion object

const object1 = {
    firstName : "John",
    lastName : "Doe",
    salary : 5000
}
const object2 = new Object()

console.log(Object.keys(object1));
console.log(Object.values(object1));
const obj = Object.entries(object1)
console.log(obj);
console.log();
Object.freeze(object1)
object1.firstName="Donald"
console.log();

const addr = {
    street: "limboto no.20",
    city: "bogor"
}
let alamat = {...addr,kelurahan : "sumur batu"}
alamat = {...addr,kecamatan : "babakan madang"}
alamat = {...addr,provinsi:"jawa barat"}
console.log();

const marge = {...object1,...addr}
console.log();

const employee = {
    firstName : "john",
    lastName : "wick",
    salary : 5000,
    portofolio : {ipk : 3.4, skill: ['java','oracle']}
}

const {lastName,firstName,salary,portofolio:{skill,ipk}} = employee
console.log();

const person = Object.assign(employee)

const emp = {...employee}
console.log();

emp.name = emp.firstName
console.log();
emp.skill = [...emp.portofolio.skill]
emp.skill[1] = "postgress"
console.log();

const emp1 ={
    firstName : "john",
    lastName : "black",
    salary : 7000,
    skill: ['javascript','postgress']
}
const emp2 ={
    firstName : "arya",
    lastName : "stark",
    salary : 9000,
    skill: ['java','oracle']
}

const listEmp=[emp1,emp2]
console.log();