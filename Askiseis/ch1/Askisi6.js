function calculateCircleArea(radius) {
    let area = Math.PI * Math.pow(radius, 2);
    return area;
}

let radius = 5;
let area = calculateCircleArea(radius);

console.log(`The area of a circle with radius ${radius} is ${area}`);
