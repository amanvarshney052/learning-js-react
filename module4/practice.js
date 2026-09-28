const employees = [
    {
        id: 1,
        name: "Aman",
        department: "IT",
        salary: 60000,
        active: true
    },
    {
        id: 2,
        name: "Rahul",
        department: "HR",
        salary: 45000,
        active: true
    },
    {
        id: 3,
        name: "Priya",
        department: "IT",
        salary: 75000,
        active: true
    },
    {
        id: 4,
        name: "Raj",
        department: "Finance",
        salary: 50000,
        active: false
    }
];

// const empNames=employees.map(emp=>emp.name);
// console.log(empNames);

// const ITempNames=employees.filter(emp=>emp.department==="IT").map(emp=>emp.name);
// console.log(ITempNames);

// const active_empNames=employees.filter(emp=>emp.active===true).map(emp=>emp.name);
// console.log(active_empNames);

const totalsalary=employees.reduce((sum,emp)=>{ return sum+emp.salary},0);
console.log(totalsalary);