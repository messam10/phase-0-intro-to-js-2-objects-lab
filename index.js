let employee = {};

function updateEmployeeWithKeyAndValue(employee, key, value) {
    let newEmployee = { ...employee };
    newEmployee[key] = value;
    return newEmployee;
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}
function deleteFromEmployeeByKey(employee, key) {
    let newEmployee = Object.assign({}, employee);
    delete newEmployee[key];
    return newEmployee;
}
function destructivelyDeleteFromEmployeeByKey(employee) {
    let newEmployee = ('12 Broadway', employee);
    delete employee.name;
    return newEmployee;
}

console.log(updateEmployeeWithKeyAndValue(employee, "name", "sam"));
console.log(updateEmployeeWithKeyAndValue(employee, "streetAddress", "11 Broadway"));
console.log(destructivelyUpdateEmployeeWithKeyAndValue(employee, "streetAddress", "12 Broadway"));
console.log(deleteFromEmployeeByKey(employee, "name"));
console.log(destructivelyDeleteFromEmployeeByKey(employee));
console.log(employee);