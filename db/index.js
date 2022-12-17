const db = require('../config');

const Queries = {
    
GetDepartmentNames : () => {
    return new Promise((res, rej) => db.query('select name from department', (err, data) => {
        const departmentNames = data.map(department => department.name);
        res(departmentNames);
    }))
},
GetRoleNames : () => {
    return new Promise((res, rej) => db.query('select title from role', (err, data) => {
        const roleNames = data.map(role => role.title);
        res(roleNames);
    }))
},
GetEmployeeNames : () => {
    return new Promise((res, rej) => db.query("select concat(first_name,' ',last_name) as name from employee", (err, data) => {
        const employeeNames = data.map(employee => employee.name);
         res(employeeNames);
    }));
},
GetAllDepartments : () => {
    return new Promise((res, rej) => db.query("select * from department", (err, data) => {
        res(data);
    }));
},
GetAllRoles : () => {
    return new Promise((res, rej) => db.query("select * from role", (err, data) => {
        res(data);
    }))
},
GetAllEmployees : () => {
    return new Promise((res, rej) => db.query("select * from employee", (err, data) => {
        res(data);
    }))
}
}


module.exports = Queries