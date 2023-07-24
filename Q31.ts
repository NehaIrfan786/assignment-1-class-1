let currentUsers: string[] = ['Alice', 'bob', 'Charlie', 'Dave', 'Eric'];
let newUsers: sring[] = ['Frank', 'George', 'Henry', 'Alice', 'BOB'];

for (let newUser of newUsers) {
    if (currentUsers.map(user => user.toLowerCase()).includes(newUser.toLowerCase())) {
        console.log(`the username '${newUser}' is already taken. please enter a new username.`); 
    } else {
        console.log(`The username '${newUser}' is available.`);
    }
}