// 1. Custom sorting program in JS via Bubble Sort ?
// let inputArr = [4, -1, 34, 09, -9, 103];
// for (let i = 0; i < inputArr.length; i++) {
//   for (let j = i + 1; j < inputArr.length; j++) {
//     let temp = inputArr[i];
//     if (inputArr[i] > inputArr[j]) {
//       inputArr[i] = inputArr[j];
//       inputArr[j] = temp;
//     }
//   }
// }
// console.log(inputArr)
////===========================================================================================
// 2. Write a program to check if a string or word or number is palindrome ? eg->madam,1234321
// const isPlaindrome = (inputChar) => {
//     let str = inputChar.toString();
//     let resultWord = '';
//     for(let i=str.length-1; i>=0; i--)
//     {
//         resultWord += str[i];
//     }
//     return (resultWord == str) ? true : false;
// }
// console.log(isPlaindrome('racecar'))
// console.log(isPlaindrome('abc'))
// console.log(isPlaindrome(121))
////===========================================================================================
// 3. Write a program to check if value/target exists or not in ascending array in O(log n) time complexity ?For doing this you should know the Binary Search Algorithm.
// const customInArray = (sortedArray, key) => {
//   let start = 0;
//   let end = sortedArray.length - 1;
//   while (start <= end) {
//     let middle = Math.floor((start + end) / 2);
//     if (sortedArray[middle] === key) {
//       return true;
//     } else if (sortedArray[middle] < key) {
//       start = middle + 1;
//     } else {
//       end = middle - 1;
//     }
//   }
//   return false;
// }
// console.log(customInArray([1, 3, 5, 6, 9, 14, 29, 57, 89], 59));
////===========================================================================================
// 4. Write a program to get total vowel count from String ?
// const getVowelCount = (inputStr) => {
//     let totalVowelCount = 0;
//     for(let i=0; i<inputStr.length; i++)
//     {
//         let char = inputStr[i];
//         if(char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u')
//             totalVowelCount++;
//     }
//     return totalVowelCount;
// }
// console.log(getVowelCount('hello how are you today programiz website?')) let inputNum=4
////===========================================================================================
// 5. Write a program to prints factorial of any number ?
// let result = 1;
// for (let i = 1; i <= inputNum; i++) {
//   result *= i;
// }
// console.log(result)
