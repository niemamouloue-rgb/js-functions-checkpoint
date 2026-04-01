// ======================
// STRING FUNCTIONS
// ======================

// Reverse a String
function reverseString(str) {
  return str.split("").reverse().join("");
}

// Count Characters
function countCharacters(str) {
  return str.length;
}

// Capitalize Words
function capitalizeWords(sentence) {
  return sentence
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

// ======================
// ARRAY FUNCTIONS
// ======================

// Find Maximum
function findMax(arr) {
  return Math.max(...arr);
}

// Find Minimum
function findMin(arr) {
  return Math.min(...arr);
}

// Sum of Array
function sumArray(arr) {
  return arr.reduce((sum, num) => sum + num, 0);
}

// Filter Array (example: keep numbers > 5)
function filterArray(arr) {
  return arr.filter(num => num > 5);
}

// ======================
// MATHEMATICAL FUNCTIONS
// ======================

// Factorial
function factorial(n) {
  if (n === 0) return 1;

  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}

// Prime Number Check
function isPrime(num) {
  if (num <= 1) return false;

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

// Fibonacci Sequence
function fibonacci(n) {
  let sequence = [0, 1];

  for (let i = 2; i < n; i++) {
    sequence.push(sequence[i - 1] + sequence[i - 2]);
  }

  return sequence.slice(0, n);
}
