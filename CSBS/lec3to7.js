//lec.3 splice,push,pop,slice
const myArray = [2, 4, 6, 7, 9];
const newValue = 50;
const insertIndex = 4; // 4th index (zero-based)

// Shift elements to make room for the new value
for (let i = myArray.length; i > insertIndex; i--) {
  console.log(myArray,i)
  myArray[i] = myArray[i-1];
}
// Insert the new value at the specified index
myArray[insertIndex] = newValue;

console.log(myArray);  // Output: [2, 4, 6, 50, 7, 9]
//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&//
//lec.4 delete elm at a index
let a=[1,2,3,4]
let ind=2

for(let i=ind;i<a.length;i++){
  a[i]=a[i+1]
  console.log(i)
}
a.length=a.length-1
console.log(a)  //Output: [1,2,4]
//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&//
//lec.5 element array me h ya nhi ,also iska index find kro
let a=[1,2,3,4];
let el=2;
let index=-1; //-1 means not present

for(let i=0;i<a.length;i++){
  if(a[i]===el){
    index=i
    break;
  }
}
console.log(index===-1?'not':'yes')
//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&//
//lec.6,7 merse three array
// method1
let b=[1,2,3,4];
let a=[4,4,4,5,6,7,2,2,2];
let c=[8,9]

let ind = b.length-1
console.log(ind)
for(let i=0;i<a.length;i++){
   ind = ind +1
   b[ind]=a[i]
}
for (let i = 0; i < c.length; i++) {
  ind = ind + 1
  b[ind] = c[i]
}
console.log(b)
