// more complicated function which allow to find only first or second missed number by its order
// complexity of this algorithm is O(log n) what is more better than O(n) in another example
function findMissedNumberByOrder(arr, missedNumOrder = 1, missedNum) {
  if (missedNumOrder === 1) {
    missedNum = undefined;
    if (arr[0] > 1) return 1
  }
  if (missedNumOrder === 2) {
    if (arr[missedNum  - 1] - missedNum === 2) return missedNum + 1;
  }
  let left = missedNum ? missedNum - 1 : 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const expectedValueOfMidArrItem = mid + missedNumOrder
    if (arr[mid] - arr[mid - 1] > 1 && arr[mid] === expectedValueOfMidArrItem + 1) {
      return arr[mid] - 1
    }
    if (arr[mid] === expectedValueOfMidArrItem) {
      left = mid + 1;
    } else {
      right = mid - 1
    }
    // case if missed number located near the end of array
    if (missedNumOrder === 1 && left >= arr.length - 2) {
      if (arr[arr.length - 1] - arr[arr.length - 2] > 1) {
        return arr[arr.length - 2] + 1
      }
    }
  }

  return null;
}

function findTwoMissedNumbers(numbersArray) {
  const firstMissedNumber = findMissedNumberByOrder(numbersArray, 1);
  const secondMissedNumber = findMissedNumberByOrder(numbersArray, 2, firstMissedNumber);
  return [firstMissedNumber, secondMissedNumber]
}

console.log('O(log n)________________________________________________________________');
console.log(findTwoMissedNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]), ' | expected result: [null, null]');
console.log(findTwoMissedNumbers([1, 3, 2, 4, 5, 6, 7, 8, 9, 10, 11]), ' | expected result: [null, null]');
console.log(findTwoMissedNumbers([1, 2, 3, 4, 5, 7, 8, 9, 10, 11]), ' | expected result: [6, null]');
console.log(findTwoMissedNumbers([1, 3, 4, 5, 6, 7, 8, 9, 10, 11]), ' | expected result: [2, null]');
console.log(findTwoMissedNumbers([2, 3, 4, 5, 6, 7, 8, 9, 10, 11]), ' | expected result: [1, null]');
console.log(findTwoMissedNumbers([1, 3, 4, 5, 7, 8, 9, 10, 11]), ' | expected result: [2, 6]');
console.log(findTwoMissedNumbers([1, 2, 3, 4, 5, 7, 8, 9, 11]), ' | expected result: [6, 10]');
console.log(findTwoMissedNumbers([3, 4, 5, 6, 7, 8, 9, 10, 11]), ' | expected result: [1, 2]');
console.log(findTwoMissedNumbers([1, 2, 3, 4, 5, 6, 7, 8, 11]), ' | expected result: [9, 10]');


