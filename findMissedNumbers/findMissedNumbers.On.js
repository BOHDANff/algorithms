// simple function which could found any amount of missed numbers in sorted array
// Complexity of algorithm is linear - O(n*j) where n - is arr length and j - is amount of missed numbers
// In the case of two missed numbers complexity is simple O(n)
function findMissedNumbers(arr) {
  const missedNumbers = [];
  if (arr[0] > 1) { // if there missed number at the start of the arr
    for (let i = 1; i < arr[0]; i++) {
      missedNumbers.push(i);
    }
  }
  for (let i = 0; i < arr.length - 1; i++) {
    const diff = arr[i + 1] - arr[i]
    if (diff < 1) {
      return 'arr not sorted'
    }
    if (diff > 1) {
      for (let j = arr[i] + 1; j < arr[i] + diff; j++) {
        missedNumbers.push(j);
      }
    }
  }
  return missedNumbers;
}

console.log('O(n)________________________________________________________________');
console.log(findMissedNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]), ' | expected result: []');
console.log(findMissedNumbers([1, 3, 2, 4, 5, 6, 7, 8, 9, 10, 11]), ' | expected result: "arr not sorted"');
console.log(findMissedNumbers([1, 2, 3, 4, 5, 7, 8, 9, 10, 11]), ' | expected result: [6]');
console.log(findMissedNumbers([1, 3, 4, 5, 6, 7, 8, 9, 10, 11]), ' | expected result: [2]');
console.log(findMissedNumbers([2, 3, 4, 5, 6, 7, 8, 9, 10, 11]), ' | expected result: [1]');
console.log(findMissedNumbers([1, 3, 4, 5, 7, 8, 9, 10, 11]), ' | expected result: [2, 6]');
console.log(findMissedNumbers([1, 2, 3, 4, 5, 7, 8, 9, 11]), ' | expected result: [6, 10]');
console.log(findMissedNumbers([3, 4, 5, 6, 7, 8, 9, 10, 11]), ' | expected result: [1, 2]');
console.log(findMissedNumbers([1, 2, 3, 4, 5, 6, 7, 8, 11]), ' | expected result: [9, 10]');
