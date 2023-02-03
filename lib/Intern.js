const Employee = require('./Employee');
// NeedsSPV = Needs Supervisor
class Intern extends Employee{
    constructor(name,id, EmployeeType, NeedsSpv){
        info(name,id,EmployeeType);
        this.NeedsSpv = NeedsSpv;
        
    }
    NeedsSpv(){
        return this.NeedsSpv;
    }
}

module.exports = Intern;