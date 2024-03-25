//merge sort -->https://www.youtube.com/watch?v=4z9I6ZmeLOQ || https://www.youtube.com/watch?v=wXZyuJqNk9U&list=PLC3y8-rFHvwjPxNAKvZpdnsr41E0fCMMP&index=27
function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let result = [];

  while (left.length  && right.length ) {
    console.log(left,right,result)
    if (left[0] <= right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  return [...result,...left, ...right]
  // return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

// Example usage:
const myArray = [3, 1, 4, 1, 5, 9];
const sortedArray = mergeSort(myArray.slice()); // Create a copy to avoid modifying the original array

console.log(sortedArray); // Output: [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]
