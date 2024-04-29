const array1 = [1, 4, 9, 16];

// Pass a function to map
const map1 = array1.map((x) => x * 2);
const map2 = array1.map((x) => x * 3);
console.log(map1);
console.log(map2);
// Expected output: Array [2, 8, 18, 32]
// Expected output: Array [3, 12, 27, 48]
