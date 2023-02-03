const Employee = require ('./Employee');
// Spv = Supervisor 
class Manager extends Employee{
    constructor(name, id, EmployeeType, Spv){
        info( name, id ,EmployeeType);
        this.Spv=Spv;
    }
    getSupervisor(){
        return this.Spv;
    }
}
module.exports = Manager;