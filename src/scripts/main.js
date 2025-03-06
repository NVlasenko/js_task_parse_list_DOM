'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const employeeList = document.querySelectorAll('ul li');

  function parseSalary(salaryString) {
    return parseFloat(salaryString.replace(/[^0-9.-]+/g, ''));
  }

  function getEmployees(list) {
    return Array.from(list).map((li) => {
      return {
        name: li.textContent.trim(),
        position: li.getAttribute('data-position'),
        salary: parseSalary(li.getAttribute('data-salary')),
        age: parseInt(li.getAttribute('data-age'), 10),
      };
    });
  }

  function sortList(list) {
    const employees = getEmployees(list);

    return employees.sort((a, b) => b.salary - a.salary);
  }

  sortList(employeeList);
  getEmployees(employeeList);
});
