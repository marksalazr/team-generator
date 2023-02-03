class Employee{
    constructor (name,id,EmployeeType){
        this.name = name;
        this.id =id;
        this.EmployeeType = EmployeeType;
        this.EmployeePos = EmployeePos   
     }

    getType (){
        return this.EmployeeType
    }
    getPos(){
        return this.EmployeePos
    }
    getName () {
        return this.name;
    }
}

module.exports = Employee;