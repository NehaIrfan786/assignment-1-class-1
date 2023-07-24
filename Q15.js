var guests = ['rumman', 'Fariha', 'Neha'];
console.log('I found a bigger dinner table!');
guests.unshift('Aroush');
guests.push('Rabia');
for (var _i = 0, guests_1 = guests; _i < guests_1.length; _i++) {
    var guest = guests_1[_i];
    console.log("Dear ".concat(guest, ",\n    \n    I would be honored if you would love to hear your stories and learn from your experiences.\n    \n    Sincerely,\n    khusbakht \n    "));
}
