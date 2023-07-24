let guests = ['rumman', 'Fariha', 'Neha'];
console.log('I found a bigger dinner table!');
guests.unshift('Aroush');
guests.push('Rabia');

for (const guest of guests) {
    console.log(`Dear ${guest},
    
    I would be honored if you would love to hear your stories and learn from your experiences.
    
    Sincerely,
    khusbakht 
    `)
}