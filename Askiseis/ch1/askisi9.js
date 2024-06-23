const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let subarraySize = 3;

function splitArrayIntoSubarrays(array, subarraySize) {
    const result = [];

    for (let i = 0; i < array.length; i += subarraySize) {
        let subarray = array.slice(i, i + subarraySize);
        result.push(subarray);
    }

    return result;
}

let subarrays = splitArrayIntoSubarrays(arr, subarraySize);
console.log(subarrays);
