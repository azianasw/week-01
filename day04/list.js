import Employee,{Contract} from "./data.js";

const emp1 = new Employee("dian","cp",12000)
const emp2 = new Employee("kinan","ayu",16000)
emp1.skill = ['postgress','oracle']
console.log(emp1);

const empcon = new Contract("dani","siregar",14000,[],"Contract")
empcon.extra = 5000
console.log(empcon);

console.log(Employee.totalEmp);
console.log(emp1.toString());
console.log(empcon.toString());

const list = [emp1,emp2,empcon]
console.log(list); 

const totalSal = list.reduce((sum,{salary}) => sum + salary,0)

const fil = list.filter(el => el.status === "Contract")

console.log(fil.toString());
console.log(totalSal);