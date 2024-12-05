// Local Storage key for storing employees
const EMPLOYEES_STORAGE_KEY = 'employees';

// Get the employee form and employee list elements
const employeeForm = document.getElementById('employeeForm');
const employeesList = document.getElementById('employees');

// Load employees from localStorage or initialize an empty array
function loadEmployees() {
    const employees = JSON.parse(localStorage.getItem(EMPLOYEES_STORAGE_KEY)) || [];
    employeesList.innerHTML = ''; // Clear the list before rendering

    employees.forEach((employee, index) => {
        const li = document.createElement('li');
        li.textContent = `${employee.name} (${employee.department})`;

        // Create Delete button
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.classList.add('delete-btn');
        deleteBtn.addEventListener('click', () => {
            deleteEmployee(index);
        });

        li.appendChild(deleteBtn);
        employeesList.appendChild(li);
    });
}

// Add new employee
employeeForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent form submission

    const name = document.getElementById('name').value.trim();
    const department = document.getElementById('department').value.trim();

    if (!name || !department) {
        alert('Please fill in both fields.');
        return;
    }

    const newEmployee = { name, department };
    const employees = JSON.parse(localStorage.getItem(EMPLOYEES_STORAGE_KEY)) || [];
    employees.push(newEmployee);

    // Save updated employees to localStorage
    localStorage.setItem(EMPLOYEES_STORAGE_KEY, JSON.stringify(employees));

    // Clear the form and reload the employee list
    document.getElementById('name').value = '';
    document.getElementById('department').value = '';
    loadEmployees();
});

// Delete employee
function deleteEmployee(index) {
    const employees = JSON.parse(localStorage.getItem(EMPLOYEES_STORAGE_KEY)) || [];
    employees.splice(index, 1); // Remove employee at specified index

    // Update the localStorage with the new employee list
    localStorage.setItem(EMPLOYEES_STORAGE_KEY, JSON.stringify(employees));

    loadEmployees(); // Reload the employee list after deletion
}

// Initial load of employees
loadEmployees();
