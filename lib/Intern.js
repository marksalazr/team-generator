const Employee = require('./Employee');
// NeedsMng = Needs Manager
class Intern extends Employee{
    constructor(name,id, email, NeedsMng){
        info(name,id,email);
        this.NeedsMng = NeedsMng;
        
    }
    NeedsMng(){
        return this.NeedsMng;
    }
}

module.exports = Intern;