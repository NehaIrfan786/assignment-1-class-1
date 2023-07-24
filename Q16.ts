var guests2 = [ 'neha', 'rumman', 'Fariha', 'Aroush' ]
console.log(" I can only invite two people for dinner.");

while (guests2.lenght > 2) {
    const guest2 = guest2.pop();
    console.log(`sorry, ${guest}, I can't invite you to dinner.`);
}
console.log(`I'm still inviting ${guests2[0]} and ${guests2[1]} to dinner.`);


guests2.pop();
guests2.pop();

console.log("My guests list is now empty.");
