//quick sort ,recursion -->https://www.youtube.com/watch?v=ceqwscS_muA&list=PLC3y8-rFHvwjPxNAKvZpdnsr41E0fCMMP&index=24
function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  const lastIndex = arr.length - 1
  const pivot = arr[lastIndex];
  const left = [];
  const right = [];

  for (let i = 0; i < lastIndex; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right)]
}
// Example usage:
const myArray = [3, 1, 4, 1, ];
console.log(quickSort(myArray)); // Output: [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]
