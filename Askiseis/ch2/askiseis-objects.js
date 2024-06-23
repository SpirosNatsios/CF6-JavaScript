const people = [
    { name: "Alice", age: 30 },
    { name: "Bob", age: 25 },
    { name: "Charlie", age: 35 },
    { name: "Diana", age: 28 },
    { name: "Emily", age: 22 },
    { name: "Frank", age: 55 },
];

//Askisi 1
const underThirty = people.filter(({ age }) => age < 30);

console.log(underThirty);

//Askisi 2
const peopleNames = people.map(({ name }) => name);

console.log(peopleNames);
