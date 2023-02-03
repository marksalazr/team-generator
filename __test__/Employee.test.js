const Employee = require ("../lib/Employee");
describe('Employee',() => {
    describe('Initialization',()=>{
        it("Should describe a new Employee instance with name, id, character class",()=> {
            const name = "Joe"
            const id = 1234
            const EmployeeType = "Employee";

            const newEmployee = new Employee (name,id,EmployeeType);

            expect (newEmployee instanceof Employee).toBe(true);
            expect (newEmployee.name).toEqual("Joe");
            expect(newEmployee.id).toEqual(1234);
            expect(newEmployee.EmployeeType).toEqual("Employee")

        });
    });
    describe('get employee type', ()=>{
        it('should return the type of employee',()=>{
            const name ="Joe";
            const id = 1234;
            const EmployeeType = "Intern"

            const newEmployee = new Employee (name,id,EmployeeType);

            const result = newEmployee.getType();
        })
    })
});