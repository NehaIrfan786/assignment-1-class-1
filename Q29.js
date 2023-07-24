var usernames = ['admin', 'Eric', 'Alice', 'Bob', 'Charlie'];
for (var _i = 0, username_1 = username; _i < username_1.length; _i++) {
    var username = username_1[_i];
    if (username === 'admin') {
        console.log('Hello admin, would you like to see a status report?');
    }
    else {
        console.log("Hello ".concat(username, ", thank you for logging in again."));
    }
}
