// const arr = [4, 4, 5, 5, 6, 6, 7, 7, 8, 8];

// const filteredArr = arr.filter((number, index, self) => self.indexOf(number) === index);

// console.log(filteredArr);

let numbers = [4, 4, 5, 5, 6, 6, 7, 7, 8, 8];

function removeDuplicates(arr) {
    let uniqueArray = [];

    for (let value of arr) {
        if (!uniqueArray.includes(value)) {
            uniqueArray.push(value);
        }
    }

    return uniqueArray;
}

console.log(removeDuplicates(numbers));
