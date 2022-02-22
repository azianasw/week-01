export default class Employee {
    static totalEmp=0
    constructor(firstname,lastname,salary=0,skill=[],status="Permanent"){
        this.firstname = firstname
        this.lastname = lastname
        this.salary = salary
        this.skill = skill
        this.status = status
        Employee.totalEmp++
    }
    toString(){
        return `${this.firstname} ${this.lastname}, Gaji = Rp.${this.salary}`
    }
}

class Contract extends Employee{
    constructor(firstname,lastname,salary=0,skill=[],status,extra){
        super(firstname,lastname,salary,skill,status)
        this.extra = extra
    }
    toString(){
        return super.toString() + ` status ${this.status}, gaji total ${this.salary + this.extra}`
    }
}
export {Contract}