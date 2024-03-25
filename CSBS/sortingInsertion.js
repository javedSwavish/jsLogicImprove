//sort insertion https://www.youtube.com/watch?v=Wu_mDUIsTVE&list=PLC3y8-rFHvwjPxNAKvZpdnsr41E0fCMMP&index=22
  let arr= [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
     // Start iterating from the second element
    for (let i = 1; i < arr.length; i++) {
        // Store the current element to be inserted
        const current = arr[i];
        let j = i - 1;

        // Move elements of arr[0..i-1], that are greater than current,
        // to one position ahead of their current position
        while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j];
            j--;
        }

        // Insert the current element into the correct position
        arr[j + 1] = current;
    }
//  Output: [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]
//m2 using for loop
let arr = [3,5,7,6,5,4,2,-5];
for (let i = 1; i < arr.length; i++) {
  const current = arr[i];
  let j = i - 1;
   // while (j >= 0 && arr[j] > current) {
   //          arr[j + 1] = arr[j];
   //          j--;
   //      }
  for (j ; j >= 0 && arr[j] > current; j--) {
    arr[j + 1] = arr[j];
  }
  arr[j + 1] = current;
}

