const inquirer = require("inquirer")
const path = require ("path");
const fs = require("fs");
// const Manager = require("./lib/Manager");
// const Intern = require('./lib/Intern');
// const Engineer = require ("./lib/Engineer");
const Employee = require("./lib/Employee"); 
const createTeam = require("./src/createTeam");
const DIST_DIR = path.resolve(__dirname,"dist");
const distPath =path.join(DIST_DIR,"index.html");

const TheTeam =[];
const Array =[];

console.log(
    'welcome team '
)
const appMenu = () => {
    createTeam(); {
        inquirer
      .prompt([
        {
          type: "list",
          name: "EmployeeChoice",
          message: "Which type of employees would you like to add?",
          choices: [
            "Manager",
            "Engineer",
            "Intern",
            "HR",
            "Thats it!"
            
          ]
        }
      ])
      // Type
      .then((response) => {
        switch (response.employeeType) {
          case "Manager":
            addEmployee();
            break;
          case "Intern":
            addEmployee();
            break;
            case "Engineer":
            addEmployee();
            break;
            case "HR":
            addEmployee
                break;
          default:
            buildTeam();
        }
      });
  }
  function addEmployee() {
    inquirer
      .prompt([
    // ..... Name
        {
          type: "input",
          name: "Name",
          message: "What is there name?",
          validate: (answer) => {
            if (answer !== "") {
              return true;
            }
            return "You have to enter a name.";
          }
        },

        // ....ID
        {
          type: "input",
          name: "id",
          message: "What is the id?",
          validate: (answer) => {
            const pass = answer.match(/^[1-9]\d*$/);
            if (pass) {
              if (idsArray.includes(answer)) {
                return "ID is already taken. .";
              } else {
                return true;
              }
            }
            return "Please enter a positive number greater than zero.";
          }
        },
        // ......Email 
        {
          type: "input",
          name: "email",
          message: "Enter Email",
          validate: (answer) => {
            if (answer !== "") {
              return true;
            }
            return "Enter a Valid email.";
          }
        }
      ])
      .then((response) => {
        const employee  = new Employee (
          response.name,
          response.id,
          response.email
        );
        TheTeam.push(employee);
        Array.push
           (response.name,
           response.id,
           response.email);
        createTeam();
      });
  }

  const buildTeam = () => {
    if (!fs.existsSync(DIST_DIR)) {
      fs.mkdirSync(DIST_DIR);
    }
    fs.writeFileSync(distPath, createTeam(TheTeam), "utf-8");
  };

  createTeam();

    }

appMenu(); 