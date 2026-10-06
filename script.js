let employees = [];
function addEmployee() {
  let name = document.getElementById("name").value;
  let profession = document.getElementById("profession").value;
  let age = document.getElementById("age").value;
  let message = document.getElementById("message");

  if (name === "" || profession === "" || age === "") {
    message.innerHTML =
      "Error: Please Make sure All the fields are filled before adding an employee!";
    message.style.color = "red";
    return;
  }

  let employee = {
    id: employees.length + 1,
    name: name,
    profession: profession,
    age: age,
  };

  employees.push(employee);
  message.innerHTML = "Success: Employee Added!";
  message.style.color = "green";

  document.getElementById("name").value = "";
  document.getElementById("profession").value = "";
  document.getElementById("age").value = "";

  displayEmployees();
}

function displayEmployees() {
  let employeeList = document.getElementById("employeeList");
  employeeList.innerHTML = "";
  employees.forEach(function (employee, index) {
    let div = document.createElement("div");
    div.className = "employee";
    div.innerHTML = `<span class="employee-data">
    ${index + 1}. Name: ${employee.name}
    &nbsp; &nbsp;
    Profession: ${employee.profession}
    &nbsp; &nbsp;
    Age: ${employee.age}
    </span>
    <button onclick="deleteEmployee(${employee.id})">Delete User</button>`;

    employeeList.appendChild(div);
  });
  document.getElementById("count").innerText = employees.length;
}

function deleteEmployee(id) {
  employees = employees.filter(function (employee) {
    return employee.id !== id;
  });

  displayEmployees();
}
