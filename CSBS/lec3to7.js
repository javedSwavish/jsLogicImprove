//lec.3 splice,push,pop,slice
const myArray = [2, 4, 6, 7, 9];
const newValue = 50;
const insertIndex = 0; // 4th index (zero-based)

// Shift elements to make room for the new value
for (let i = myArray.length - 1; i >= insertIndex; i--) {
  console.log(myArray,i)
  myArray[i + 1] = myArray[i];
}

// Insert the new value at the specified index
myArray[insertIndex] = newValue;

console.log(myArray);  // Output: [2, 4, 6, 50, 7, 9]
//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&//
//lec.4
