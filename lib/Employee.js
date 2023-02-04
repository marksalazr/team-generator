class Employee{
    constructor (employeeType ,name, id , email ,EmployeePos){
        this.employeeType = employeeType
        this.name = name;
        this.id =id;
        this.email = email;
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
    getID(){
        return this.id;
    }
    getEmail (){
    return this.email
    }
}

module.exports = Employee;