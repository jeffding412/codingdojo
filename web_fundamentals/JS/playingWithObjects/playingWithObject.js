var users = [{name: "Michael", age:37}, {name: "John", age:30}, {name: "David", age:27}];

function printJohnAge(users) {
    for (var i = 0; i < users.length; i++) {
        if (users[i].name == "John") {
            console.log("John is", users[i].age, "years old");
        }
    }
}

function printNameOfFirst(users) {
    console.log(users[0].name, "is the first object");
}

function printUsers(users) {
    for (var i = 0; i < users.length; i++) {
        console.log(users[i].name, "-", users[i].age);
    }
}

printUsers(users);