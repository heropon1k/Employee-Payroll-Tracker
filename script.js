//declare variables
const employeesArray = [];

// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function () {
  // TODO: Get user input to create and return an array of employee objects
  // set input to true ()
  let input = true;
  while (input !== false) {
    //Create employee object to be pushed into employees array
    let employeeObject = {
      firstName: window.prompt("What is their first name"),
      lastName: window.prompt("What is their last name"),
      salary: window.prompt("What is their salary"),
    };
    //Checked whether salary was a number 
    if(isNaN(employeeObject.salary)==true){
      employeeObject.salary = 0;
      console.log("Salary was not a number")
    }
    //Checked whether employeeObjects was correct
    //console.log(employeeObject)
    employeesArray.push(employeeObject)
    //Checked whether employeesArray was correct at intermediate steps
    //console.log(employeesArray)

    input = window.confirm("Would you like to continue");

    /**Checked whether cancel was clicked
    if (input == false) {
      console.log("clicked cancel");

    }*/

  }
  //Checked whether final employeesArray was correct
  //console.log(employeesArray)

  //Returns the created array for other functions to use
  return(employeesArray);

}

// Display the average salary
const displayAverageSalary = function (employeesArray) {
  // TODO: Calculate and display the average salary
  //Declared variables
  let average = 0;
  for(i=0; i < employeesArray.length; i++){
    //Add all salaries, Number function converts salary to a number because it is a string right now
    //console.log(typeof employeesArray[i].salary)
    average += Number(employeesArray[i].salary);
    //Checked average
    //console.log(average)
  }
  //Divied average by number of employees
  let totalAvg = average/i;
  console.log(`The average employee salary between our ${i} employee(s) is ${totalAvg}`);
}

// Select a random employee
const getRandomEmployee = function (employeesArray) {
  // TODO: Select and display a random employee
  //Create random number gen from 0 to lenght of array
  let randInt = Math.floor(Math.random() * employeesArray.length);
  //Checked randInt
  //console.log(randInt);
  console.log(`Congratulations to ${employeesArray[randInt].firstName} ${employeesArray[randInt].lastName}, our random drawing winner!`);
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function (employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US", {
      style: "currency",
      currency: "USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function () {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function (a, b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
