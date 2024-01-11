// start with strings, numbers and booleans
let number = 1;
let number2 = number;
number = 2;
console.log(number, number2);
let string = 'string';
let string2 = string;
string = 'another';
console.log(string, string2);

// Copying Array
let players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];
let players1=players;
let players2 = [...players];
players[1] = 'Bos';
console.log(players,players1, players2);


// Copying Objects
let person = {
  name: 'Wes Bos',
  age: 80,
  something:{
    else:1,
    some:'something'
  }
};
let person1=person;
let person2={...person};
let person3=JSON.parse(JSON.stringify(person))
person.name='Wesley';
person.something.some='else'
console.table(person)
console.table(person2)
console.table(person2)
console.table(person3)