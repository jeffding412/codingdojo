function printStudents(arr) {
    for (var i = 0; i < arr.length; i++) {
        console.log("Name: " + arr[i].name + ", Cohort: " + arr[i].cohort);
    }
}

let students = [
    {name: 'Remy', cohort: 'Jan'},
    {name: 'Genevieve', cohort: 'March'},
    {name: 'Chuck', cohort: 'Jan'},
    {name: 'Osmund', cohort: 'June'},
    {name: 'Nikki', cohort: 'June'},
    {name: 'Boris', cohort: 'June'}
];

printStudents(students)

function logUsers(users) {
    console.log("EMPLOYEES");
    for (var i = 0; i < users.employees.length; i++) {
        var nameLength = users.employees[i].last_name.length + users.employees[i].first_name.length
        console.log((i+1) + " - " + users.employees[i].last_name + ", " + users.employees[i].first_name + " - " + nameLength);
    }
    console.log("MANAGERS")
    for (var i = 0; i < users.managers.length; i++) {
        var nameLength = users.managers[i].last_name.length + users.managers[i].first_name.length
        console.log((i+1) + " - " + users.managers[i].last_name + ", " + users.managers[i].first_name + " - " + nameLength);
    }
}

let users = {
    employees: [
        {'first_name':  'Miguel', 'last_name' : 'Jones'},
        {'first_name' : 'Ernie', 'last_name' : 'Bertson'},
        {'first_name' : 'Nora', 'last_name' : 'Lu'},
        {'first_name' : 'Sally', 'last_name' : 'Barkyoumb'}
    ],
    managers: [
       {'first_name' : 'Lillian', 'last_name' : 'Chambers'},
       {'first_name' : 'Gordon', 'last_name' : 'Poe'}
    ]
};


logUsers(users)