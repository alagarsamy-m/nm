package com.example.employee_management.service;

import com.example.employeemanagement.model.Employee;
import com.example.employeemanagement.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmployeeService {
    @Autowired
    private EmployeeRepository employeeRepository;

    // Insert new employee
    public Employee addEmployee(Employee employee) {
        return employeeRepository.save(employee);
    }

    // Remove employee by ID
    public void removeEmployeeById(int id) {
        employeeRepository.deleteById(id);
    }

    // Get all employees
    public List<Employee> getAllEmployees() {
        return employeeRepository.findAll();
    }
}
