function generateRandomArray(length, max) {
    let array = [];
    for (let i = 0; i < length; i++) {
        array.push(Math.floor(Math.random() * max) + 1);
    }
    return array;
}

// Fungsi untuk menghitung total
function calculateTotal(array) {
    let total = 0;
    for (let i = 0; i < array.length; i++) {
        total += array[i];
    }
    return total;
}

// Fungsi untuk menghitung rata-rata
function calculateAverage(array) {
    let total = calculateTotal(array);
    return total / array.length;
}

// Fungsi untuk menemukan nilai minimum
function findMin(array) {
    let min = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i];
        }
    }
    return min;
}

// Fungsi untuk menemukan nilai maksimum
function findMax(array) {
    let max = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
    }
    return max;
}

// Menggunakan fungsi-fungsi di atas
let numbers = generateRandomArray(10, 100);
console.log("Array of random numbers:", numbers);

let total = calculateTotal(numbers);
let average = calculateAverage(numbers);
let min = findMin(numbers);
let max = findMax(numbers);

console.log("Total:", total);
console.log("Average:", average);
console.log("Minimum:", min);
console.log("Maximum:", max);