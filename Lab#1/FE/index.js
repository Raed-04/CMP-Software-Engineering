function fetchEmployees() {
  fetch('http://localhost:3000/api/v1/employee')
    .then(response => response.json())
    .then(data => {
      const tableBody = document.getElementById('dataTable')
      tableBody.innerHTML = ''
      const list = data.data
      list.forEach(item => {
        const row = document.createElement('tr')
        const idCell = document.createElement('td')
        idCell.textContent = item.id
        row.appendChild(idCell)

        const nameCell = document.createElement('td')
        nameCell.textContent = item.name
        row.appendChild(nameCell)

        const deleteCell = document.createElement('td')
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('btn', 'btn-danger', 'btn-sm');
        deleteCell.appendChild(deleteButton);

        row.appendChild(deleteCell)

        tableBody.appendChild(row)

        //Deletion event listener
        deleteButton.addEventListener("click", function() { deleteEmployee(item.id) });
      })
    })
    .catch(error => console.error(error))
}

// TODO
// add event listener to submit button
let button = document.getElementById("sub");
button.addEventListener("click", createEmployee);

// TODO
// add event listener to delete button
// Added the listener right after the creation of the button 

// TODO
function createEmployee (){
  // get data from input field
  // send data to BE
  // call fetchEmployees
  let nameBox = document.getElementById("name");
  let IDBox = document.getElementById("id");
  let employeeName = nameBox.value;
  let employeeID = IDBox.value;
  fetch('http://localhost:3000/api/v1/employee', {
    method: "POST",
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    },
    body: JSON.stringify({ID: employeeID, Name: employeeName})
  });
  fetchEmployees();
}

// TODO
function deleteEmployee (ID){
  // get id
  // send id to BE
  // call fetchEmployees
  fetch(`http://localhost:3000/api/v1/employee/${ID}`, {
    method: "DELETE"
  });
  fetchEmployees();
}

fetchEmployees();
