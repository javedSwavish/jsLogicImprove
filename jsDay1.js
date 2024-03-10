// que1. reverse a array
// ### mehtod.1 
let arr = [1, 2, 3, 4, 5];
let start = 0;
let end = arr.length - 1;

while (start < end) {
  // Swap elements at start and end indices
  [arr[start], arr[end]] = [arr[end], arr[start]];

  // Move towards the center
  start++;
  end--;
}
console.log(arr)

// ###  method.2
let a=[1,2,3,4];
let b=[];
for(let i=0;i<a.length;i++){
  b[a.length - 1 - i]=a[i]
}
console.log(b)

// ### method.3
let arr=[0,1,2,3,4,5,6,7,8]
const n = arr.length;
for (let i = 0; i < n - 1; i++) {
  for (let j = 0; j < n - 1 - i; j++) {
    // Swap the element
      // [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
    let temp = arr[j];
    arr[j]=arr[j+1];
    arr[j+1]=temp
  }
}
console.log(arr)
//===================================================//

//que2. Custom sorting program in JS via Bubble Sort ?
let inputArr = [4, -1, 34, 09, -9, 103];
for (let i = 0; i < inputArr.length; i++) {
  for (let j = i + 1; j < inputArr.length; j++) {
    let temp = inputArr[i];
    if (inputArr[i] > inputArr[j]) {
      inputArr[i] = inputArr[j];
      inputArr[j] = temp;
    }
  }
}
console.log(inputArr)
