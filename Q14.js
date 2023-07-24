var guest1 = ["Laiba", "Amna", "Hifza"];
var newGuest = "Maham";
for (var _i = 0, guests1_1 = guests1; _i < guests1_1.length; _i++) {
    var guest1 = guests1_1[_i];
    if (guest1 === "Amna") {
        guests1[guests1.indexOf(guests1)] = newGuest;
    }
}
for (var _a = 0, guests1_2 = guests1; _a < guests1_2.length; _a++) {
    var guests1 = guests1_2[_a];
    var message2 = "Dear ".concat(guest1, ",\n    \n    I would be honoured if you would join me for dinner. I would love to hear your stories and learn from your experiences.\n\n    Sincerely,\n    Neha\n ");
    console.log(message2);
}
console.log("Unfortunately, Hifza can't make it to dinner");
console.log('I have invited ${newGuest} insttead.');
for (var _b = 0, guests1_3 = guests1; _b < guests1_3.length; _b++) {
    var guest1 = guests1_3[_b];
    var message2 = "Dear ".concat(guest1, ",\n    \n    I would be honored if you would join me for dinner. I would love to hear your stories and learn your stories and learn from your experiences.\n    \n    Sincerely,\n    Neha\n    ");
    console.log(message2);
}
