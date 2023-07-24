var guest1 = ["Laiba", "Amna", "Hifza"]
var newGuest = "Maham"
for (var guest1 of guests1) {
    if (guest1 === "Amna") {
        guests1[guests1.indexOf(guests1)] = newGuest
    }
}
for (var guests1 of guests1){
    var message2 = `Dear ${guest1},
    
    I would be honoured if you would join me for dinner. I would love to hear your stories and learn from your experiences.

    Sincerely,
    Neha
 `
 ;
 console.log(message2) 
}
console.log("Unfortunately, Hifza can't make it to dinner")
console.log('I have invited ${newGuest} insttead.')
for (var guest1 of guests1){
    var message2 = `Dear ${guest1},
    
    I would be honored if you would join me for dinner. I would love to hear your stories and learn your stories and learn from your experiences.
    
    Sincerely,
    Neha
    `;
    console.log(message2)
}