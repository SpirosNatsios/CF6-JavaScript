user = {
    name: "Spiros",
    age: 26,
    city: "Athens",

    hello() {
        console.log("Hello " + this.name);
    },
};

console.log(`Hello my name is ${user.name} I'm ${user.age} years old and i live in ${user.city}`);

user.hello();
