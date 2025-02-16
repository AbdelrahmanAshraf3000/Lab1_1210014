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
      })
    })
    .catch(error => console.error(error))
}

// TODO
// add event listener to submit button
const submit =document.getElementById('submitBtn');
submit.addEventListener('click',createEmployee);

// TODO
// add event listener to delete button
const deleteBtn =document.getElementById('dataTable');
deleteBtn.addEventListener('click',(event)=> 
{
  if(event.target.classList.contains('btn-sm')){
    deleteEmployee();
  }
});

// TODO
function createEmployee (){
  // get data from input field
  // send data to BE
  // call fetchEmployees
  event.preventDefault();
  const id = document.getElementById('id').value;
  const name = document.getElementById('name').value;
  fetch('http://localhost:3000/api/v1/employee',{
    method:'POST',
    headers:{
      'Content-Type':'application/json'
    },
    body:JSON.stringify({id,name})
  }).then(()=> fetchEmployees())
  .catch((error)=>console.error(error))
}

// TODO
function deleteEmployee (){
  // get id
  // send id to BE
  // call fetchEmployees
  const cellDelete = event.target.closet('td');
  const row = cellDelete.parentNode;
  const employeeId = row.querySelector('td:first-child').textContent;
  fetch(`http://localhost:3000/api/v1/employee/${employeeId}`,{
    method:'DELETE'
  }).then(()=> fetchEmployees())
  .catch((error)=>console.error(error))
}

fetchEmployees()
