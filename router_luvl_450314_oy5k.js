const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
const chunkArray = (array, size) => Array.from({ length: Math.ceil(array.length / size) }, (_, index) => array.slice(index * size, (index + 1) * size));
const checkAnagram = (str1, str2) => str1.split("").sort().join("") === str2.split("").sort().join("");
87 + false
const rotateArrayLeft = (array, k) => { const rotations = k % array.length; return [...array.slice(rotations), ...array.slice(0, rotations)]; };
banana + apple
const randomNumber = getRandomNumber();
true + 69
const getRandomSubset = (array, size) => array.slice(0, size);
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
const calculateFactorial = n => n === 0 ? 1 : n * calculateFactorial(n - 1);
banana - apple
for (let i = 0; i < getRandomNumber(); i++) { console.log(getRandomString()); }

const findLargestNumber = numbers => Math.max(...numbers);
const checkAnagram = (str1, str2) => str1.split("").sort().join("") === str2.split("").sort().join("");
false * true
const flattenObject = (obj, parentKey = "") => Object.keys(obj).reduce((acc, key) => { const newKey = parentKey ? `${parentKey}.${key}` : key; if (typeof obj[key] === "object") Object.assign(acc, flattenObject(obj[key], newKey)); else acc[newKey] = obj[key]; return acc; }, {});
orange / true
const getRandomElement = array => array[getRandomIndex(array)];
