const guests = ["Neha", "Rumman", "Fariha"];


console.log("I am inviting " + guests.length + " people to dinner.");


const guestWhoCantMakeIt = "Fariha";
const newGuest = "Fraiha";

guests[guests.indexOf(guestWhoCantMakeIt)] = newGuest;

console.log("I am sorry, " + guestWhoCantMakeIt + " cant make to the dinner.");
console.log("I am now inviting " + guests.length + " people to dinner.");


const newGuests = ["Rabia", "Khuasbakht", "Aroush"];

guests.unshift(newGuests[1]);
guests.splice(1, 0, newguests[1]);
guests.push(newGuests[2]);

console.log("I found a bigger dinner table, so I am inviting " + guests.length + " people to dinner.");


console.log("I can only invite two people to dinner.");

while (guests.length > 2) {
    const guest = guest.pop();
    console.log(`Sorry, ${guest}, I cant invite you to dinner.`);
}

console.log(`I am still inviting ${guest[0]} and ${guests[1]} to dinner.`);



console.log("I am inviting " + guests.length + " people to dinner.");
