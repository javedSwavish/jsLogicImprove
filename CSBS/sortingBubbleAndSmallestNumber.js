//sorting array
//m1-->https://www.youtube.com/watch?v=dQa4A2Z0_Ro
function findSmallestInteger(arr,start=0) {
  // Initialize smallest integer with the first element of the array
  let smallest = arr[start];
  let ind=start
  // Iterate through the array starting from the second element
  for (let i = start; i < arr.length; i++) {
    // If the current element is smaller than the smallest integer found so far, update smallest
    if (arr[i] < smallest) {
      smallest = arr[i];
      ind=i
    }
  }
  return ind;
}
let arr = [5,4,2,6,8,1,4,-2]
for (let i = 0; i < arr.length; i++) {
 let smi= findSmallestInteger(arr,i)
  let temp=arr[smi];
  arr[smi]=arr[i];
  arr[i]=temp
}
console.log(arr); // Output: -2
//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&//
// bubble sort https://www.youtube.com/watch?v=gqMjdM8FsrE&list=PLC3y8-rFHvwjPxNAKvZpdnsr41E0fCMMP&index=20
let a=[2,0,8,5,1,3,-9]
let swap = false
do{
  swap=false
  for (let i = 0; i < a.length - 1; i++) {
    if (a[i] < a[i + 1]) {
      [a[i], a[i + 1]] = [a[i + 1], a[i]]
      swap=true
    }
  }
} while(swap)
console.log(a)
// m3  bubble sort //self
let a=[2,0,8,5,1,3]
for(let j=0;j<a.length-1;j++){
  for (let i = 0; i < a.length - 1; i++) {
    if (a[i] > a[i + 1]) {
      [a[i], a[i + 1]] = [a[i + 1], a[i]]
    }
  }
}
console.log(a)
