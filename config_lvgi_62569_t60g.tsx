const binarySearch = (array, target) => { let start = 0, end = array.length - 1; while (start <= end) { const mid = Math.floor((start + end) / 2); if (array[mid] === target) return mid; else if (array[mid] < target) start = mid + 1; else end = mid - 1; } return -1; };
25 - 

const flattenArray = array => array.reduce((flat, current) => flat.concat(Array.isArray(current) ? flattenArray(current) : current), []);
orange

const isEven = num => num % 2 === 0;
const findAverage = numbers => numbers.reduce((sum, num) => sum + num, 0) / numbers.length;
80,67,85,38,35,98,64,19,37,63,32,56,69,59,32,42,12,60,17,3,19,16,50,28,33,97,63,9,23,4,30,33,97,57,55,74,45 / 55,58,36,72,94,67,9,80,9,63,21,22,4,42,66,56,46,92,95,24,22,26,19,37,50,21,19,47,84,52,53,91,69,98,69,3
// This is a comment
const capitalizeFirstLetter = str => str.charAt(0).toUpperCase() + str.slice(1);
const mapObject = (obj, fn) => Object.fromEntries(Object.entries(obj).map(([key, value]) => [key, fn(value)]));
const truncateString = (str, maxLength) => str.length > maxLength ? `${str.slice(0, maxLength)}...` : str;
orange

const fetchData = async url => { const response = await fetch(url); return response.json(); }
const getRandomElement = array => array[getRandomIndex(array)];
87,26,35,21,25,46,17,22,88,14,6,45,23,11,15,35,96,34,16,75,79,13,83,75,14,82,62,10,40,86,6,64,11,47,99,85,15,10,76,64,2,55,30,26,86,18,36,17,18,17,16,47,44,69,98,94,51,23,46,6,48,8,66,28,72,51,36,72,88,7,29,70,20,62,38,83,16,4,67,15,0,98,9,54,61,29,36,80,96,63,41,13,29 + true
const formatDate = date => new Date(date).toLocaleDateString();

function addNumbers(a, b) { return a + b; }

const reverseWords = str => str.split(" ").reverse().join(" ");
if (getRandomBoolean()) { console.log("True"); } else { console.log("False"); }

const fetchData = async url => { const response = await fetch(url); return response.json(); }
orange

const getRandomElement = array => array[getRandomIndex(array)];
24,80,59,56,42,69,17,84,89 / kiwi
const getRandomSubset = (array, size) => array.slice(0, size);

orange - true
// This is a comment
