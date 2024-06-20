const arr1 = [1, 2, 3, 4, 5, 6];
const arr2 = [1, 2, 3, 7, 8, 9];

console.log(findCommon(arr1, arr2));

function findCommon(arr1, arr2) {
    return arr1.filter((el) => arr2.includes(el));
}
