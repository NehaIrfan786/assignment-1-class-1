console.log('apple' === 'apple'); 
console.log('apple' !== 'orange');
console.log('apple' === 'orange'); 
console.log('apple' !== 'apple'); 

console.log('APPLE'.toLowerCase() === 'apple');
console.log('APPLE'.toLowerCase() !== 'orange');
console.log('APPLE'.toLowerCase() === 'orange');
console.log('APPLE'.toLowerCase() !== 'apple');

console.log(5 === 5);
console.log(5 !== 4);
console.log(5 > 4);
console.log(5 < 6);
console.log(5 === 4);
console.log(5 !== 5);
console.log(5 > 6);
console.log(5 < 4);
console.log(5 >= 6);
console.log(5 <= 4);

console.log(5 > 4 && 6 > 5);
console.log(5 > 4 || 6 < 5);
console.log(5 > 6 && 6 > 5);
console.log(5 > 6 || 6 < 5);

const fruits = ['apple', 'orange', 'banana'];
console.log(fruits.includes('apple'));

console.log(!fruits.includes('pear'));

const fruits1 = ['apple', 'orange', 'banana'];
console.log(fruits.includes('pear'));

console.log(!fruits1.includes('apple'));