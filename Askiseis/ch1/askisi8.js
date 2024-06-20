const array2d = [
    [1, 2, 3],
    [4, 5, 6],
];

function convertTo1D(array2d) {
    let arr = [];
    for (let row of array2d) {
        for (let col of row) {
            arr.push(col);
        }
    }

    return arr;
}

console.log(convertTo1D(array2d));
