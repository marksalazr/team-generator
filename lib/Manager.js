const Employee = require ('./Employee');
// Mng = Manager
class Manager extends Employee{
    constructor(name, id, EmployeeType, Mng){
        info( name, id ,EmployeeType);
        this.Mng=Mng;
    }
    getManager(){
        return this.Mng;
    }
}
module.exports = Manager;