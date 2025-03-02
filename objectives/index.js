// 1. Write the code to find the provided string are same or not regaredless the order
// like 'ali' and 'lia' are same. FUnction will return true

// function anagrams(str1, str2) {

//   //remove whitespace and convert to lowercase
//   const formatting = (str) => str.replace(/[^\w]/g, "").toLowerCase();

//   // check the length of the strings
//   if (formatting(str1).length !== formatting(str2).length) return false;

//   // sort and compare the strings
//   return (
//     formatting(str1).split("").sort().join("") ===
//     formatting(str2).split("").sort().join("")
//   );
// }
// // anagrams("ali", "lia");
// console.log(anagrams("ali", "lia"));

// 2. Write code to find the missing range in the Array.
// Example -> [1,3,5,8] will return [2,4,6,7]

// function missing(arr) {
//   let missings = [];
//   let max = arr[0];
//   console.log(max);
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > max) {
//       max = arr[i];
//     }
//   }
//   for (let i = 0; i < max; i++) {
//     if(arr.indexOf(i) === -1) {
//     missings.push(i);
//     }
//   }
//   console.log(max);
//   console.log(missings);
// }

// missing([1, 3, 5, 8]);

// const arr = [10,45];
// let max = arr[0];
// let missingVals = [];
// const findVals = (arr) => {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i]>max) {
//       max = arr[i];
//     }
//   }
//   for (let i = 0; i < max; i++) {
//     if (!arr.includes(i)) {
//       missingVals.push(i);
//     }
//   }
//   return missingVals
// };

// console.log(findVals(arr))

// 3. Write the code to find indeces of the two elements of the array

// that sum equal to the provided value
// Example -> [1,2,3,4,5,6,7] sum=9
// it will return the indeces of the 4 and 5 (3,4)

// const findIndeces = (arr, sum) => {
//   let indeces = [];
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//       if (arr[i] + arr[j] === sum) {
//         indeces.push({
//           values: `${arr[i]} and ${arr[j]}`,
//           indeces: `${i} and ${j}`,
//         });
//       }
//     }
//   }
//   return indeces;
// };

// console.log(findIndeces([1, 2, 3, 4, 5, 6, 7], 9));

// const arr = [1, 2, 3, 4, 5, 6, 7, 1, 2];
// const res = [];
// const findSum = (arr, sum) => {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//       if (arr[i] + arr[j] === sum) {
//         res.push({value:arr[i] + arr[j], indeces: [i,j]})
//       }
//     }
//   }
//   return res;
// };

// console.log(findSum(arr, 4));

// 4. Write the code for the Palindrome
// Example -> 'madam' will return true

// Algo
// 1. make new str variable initially empty
// 2. loop through the string from the end to start
// 3. and add the char in new str variable
// 4. compare the new str variable with the original str variable

// const palindrome = (str)=>{
//   var newStr = ''
//   for(let i=str.length-1; i>=0; i--){
//     newStr = newStr+str[i]
//   }
//   console.log('newStr', newStr)
//   if(newStr === str) return true
//   else return false
// }
// console.log(palindrome('madam'))

// // 1. format the str (remove all white spaces)
// // 2. convert str to arr and reverse it and convert to str
// const palindrom = (str) =>{
//   function format (str){
//     return str.replace(/\s+/g,"")
//   }
//   return format(str).split('').reverse().join('') === format(str)
// }
// console.log(palindrom('a  lila '))

// const palindrome = (str) => {
//   let newStr = "";

//   let length = str.split("").length;
//   for (let i = length-1; i >= 0; i--) {
//     newStr += str[i];
//   }
//   console.log(newStr);
//   return str === newStr;
// };

// console.log(palindrome("madam"));

// 5. Write the code for the fibonacci series
// Example -> 1,1,2,3,5,8,13,21,34,55

// Algo
// 1. take a num as an argum and generate the series till the num
// 2. if num is 1 generate the series [1]
// 3. if two generate [1,1]
// 4. if the num is more than two than
// 5. make an array of fabSeries = [1,1]
// 6. start a loop starting from 2 till the length of the num
// 7. push the number with sum of previous two num of the series
// 8. like fabSeries.push([i-1]+[i-2])

// const fabonacci = (num)=>{
//   if(num === 1) return [1]
//   if(num === 2) return [1,1]
//   let fabSeries = [1,1]
//   for(let i=2; i<num; i++){
//     fabSeries.push(fabSeries[i-1]+fabSeries[i-2])
//   }
//   return fabSeries
// }

// console.log(fabonacci(15))
// const fibonacci = (num) => {
//   if (num === 1) return [1];
//   if (num === 2) return [1, 1];
//   let series = [1, 1];
//   for (let i = 2; i < num; i++) {
//     series.push(series[i - 1] + series[i - 2]);
//   }
//   return series;
// };

// console.log(fibonacci(5));

// const fab = (num)=>{
//   if(num === 1) return [1]
//   if(num === 2) return [1,1]
//   let fabSeries = [1,1]
//   for(let i=2; i<num; i++){
//     fabSeries.push(fabSeries[i-1]+ fabSeries[i-2])
//   }
//   return fabSeries
// }

// console.log(fab(5))
// 6. Write the code reverse the string and the integer

// Algo
// 1. make new variable
// 2. loop through the old variable and store the char into new variable
// 3. compare the new and old var

// const reverseVar = (variable) =>{
//   let newVar = ''
//   function format(variable){
//     return variable.replace(/[^a-zA-Z0-9\s]/g,"")
//   }
//   for(let i=variable.length-1;i>=0; i--){
//     newVar+=variable[i]
//   }
//   return format(newVar)
// }

// console.log(reverseVar('my na_=+=-=me is hurairah;;'))
// 7. Write the code to find the most repeated character in the string

// 1. first find the count of all char and store in the array of Object
// 2. than loop through the array and find the max count letter

// const findFrequency = (str) => {
//   let frequency = { char: "", count: 0 };
//   let high = { char: "", count: 0 };
//   for (let char of str) {
//     frequency[char] = (frequency[char] || 0) + 1;
//     if (frequency[char] > high.count) {
//       high.count = frequency[char];
//       high.char = char;
//     }
//   }
//   return high;
// };

// console.log(findFrequency("aaann"));

// const frequencyCounter = (str) => {
//   // trim and convert to lowercase
//   let newStr = str.replace(/\s/g, "").toLowerCase();
//   let frequency = { char: "", count: 0 };
//   let highFrequency = { char: "", count: 0 };
//   for (let char of newStr) {
//     frequency[char] = (frequency[char] || 0) + 1;
//     if (frequency[char] > highFrequency.count) {
//       highFrequency.count = frequency[char];
//       highFrequency.char = char;
//     }
//   }
//   return highFrequency;
// };

// console.log(frequencyCounter("My name is Abu Huraira"));

// console.log(highestFrequency('huraira'))

// // Write the code to check the number is prime or not
// const isPrime = (num) => {
//   if (num < 2) return false;
//   if (num === 2 || num === 3) return true;
//   if (num > 3) {
//     for (let i = 2; i < num; i++) {
//       if (num % i === 0) {
//         return false;
//       } else {
//         return true;
//       }
//     }
//   }
// };

// console.log(isPrime(15));

// 8. Write the code to chunk the array into the specified size
// Example -> [1,2,3,4,5,6,7,8,9] size = 3
// it will return [ [1,2,3]  , [4,5,6] , [7,8,9] ]

// Algo
// 1. Take arr and user provided size var
// 2. take two parameters 'start' and 'end'
// 3. end = start + userVar
// 4. start = arraySize - start
// 5. make base condition start < arraySize
// 6. make two arrays before loop
// 7. one is parent and second will be updated
// 8. push the second array inside the paent array and empty
// 9. and update start and end vars

// const chunkArray = (arr, size) => {
//   let parentArr = [];
//   let newArr = [];
//   let start = 0;
//   let end = size;
//   while (start < arr.length) {
//     newArr = arr.slice(start, end);
//     parentArr.push(newArr);
//     newArr = [];
//     start = end;
//     end = start + size;
//   }
//   return parentArr;
// };

// console.log(chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9,10], 3));

// function chunks(arr, size) {
//   let parentArr = [];
//   let newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     newArr.push(arr[i]);
//     console.log(newArr)
//     if (newArr.length === size) {
//       parentArr.push(newArr);
//       newArr = [];
//     }
//   }
//   if(newArr.length< 3){
//     parentArr.push(newArr);
//   }
//   return parentArr;
// }
// console.log(chunks([1, 2, 3, 4, 5, 6, 7, 8, 9,10],3));

// 8. Write the code to find the longest word in the string

// const res = { length: 0, word: "" };
// const longestWord = (str) => {
//   const word = () => {
//     return str.split(" ").filter((word) => {
//       if (word.length > res.length) {
//         res.length = word.length;
//         res.word = word;
//       }
//     });
//   }
//   word();
//   return res
// };
// console.log(longestWord("my name is abu huraira"));

// 9. Write the code for the Title Case. Every alphabet of the word will be capital
// Example -> 'ali raza' will return 'Ali Raza'

// Approach 1 -> convert str to array and change the first index of every word to uppercase
// Approach 2 -> find the space and change the next index to uppercase
// Approach 3 -> use the map function to change the first index of every word to uppercase

// Approach 1 -> convert str to array and change the first index of every word to uppercase

// const titleCase = (str) => {
//   let words = str.split(" ");
//     for(let i=0; i<words.length; i++) {
//         words[i] = words[i][0].toUpperCase() + words[i].slice(1)
//     }
//     return words.join(" ");
// };

// console.log(titleCase("ali raza"));

// Approach 2 -> find the space and change the next index to uppercase

// const titleCase = (str) => {
//     let newStr = "";
//   for (let i=0; i<str.length; i++) {
//    if(i === 0 || str[i-1] === ' '){
//          newStr += str[i].toUpperCase();
//    }
//     else {
//          newStr += str[i];
//     }
//   }
//   return newStr;
// };

// console.log(titleCase("ali raza"));

// // Approach 3 -> use the map function to change the first index of every word to uppercase
// const titleCase = (str) => {
//   return str
//     .split(" ")
//     .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
//     .join(" ");
// };

// console.log(titleCase("my deco tech"));

// const titleCase = (str = "abu huraira") => {
//   for (let i = 0; i < str.length; i++) {
//     if (i === 0 || str[i - 1] === " ") {
//       str = str.slice(0,i) + str[i].toUpperCase() + str.slice(i + 1);
//     }
//   }
//   return str;
// };

// console.log(titleCase());

// 10. Write a code to discover the anagrams in the array of the strings
// Example -> ['listen','silent','hello','world'] will return ['listen','silent']

// 11. Write the code to count the vowels in the string
// Ecampe -> 'hello world' will return 3

// 12. Write the code for the "Fizz Buzz"
// Example -> 1,2,Fizz,4,Buzz,Fizz,7,8,Fizz,Buzz,11,Fizz,13,14,Fizz Buzz
// fizz for the multiple of 3 and buzz for the multiple of 5 and fizz buzz for the multiple of 3 and 5

// 13. Write the code for the Steps String Pattern
// Example -> 'hello' will return 'H E L L O\n H E L L\n H E L\n H E\n H'

// 14. Write the code for the Pyramid String Pattern
// Example -> 5 will return
//     *
//    ***
//   *****
//  *******
// *********

// 15. Write the code for the Pyramid Number Pattern
// Example -> 5 will return
//     1
//    121
//   12321
//  1234321
// 123454321

// 16. Write the code for the Pyramid Number Pattern
// Example -> 5 will return
//     1
//    212
//   32123
//  4321234
// 543212345

// 17. Write the code for the Spiral Matrix
// Example -> 3 will return
// 1 2 3
// 8 9 4
// 7 6 5

// 18. Write the code to reverses an array
// Example -> [1,2,3,4,5] will return [5,4,3,2,1]

// 19. Write the code to filter out negative values from an array
// Example -> [1,-2,3,-4,5] will return [1,3,5]

// 20. remove the spaces found in a string
// Example -> 'hello world' will return 'helloworld'

// 21. Write the code to Get the Middle Character
// Example -> 'hello' will return 'l'

// 22. Write the code to add dash between the two even numbers
// Example -> 025468 will return 0-254-6-8

// 23. Write code that takes 10 integers and write the phone number
// Example -> 1234567890 will return (123) 456-7890

// 24. Write a code to check the number is perfect square or not
// Example -> 16 will return true, 15 will return false

// 25. Write the code of the Mumbling String
// Example -> 'hello' will return 'H-Ee-Lll-Llll-Ooooo'

// 26. Write the code for the Valid Parentheses
// Example -> '(){}[]' will return true, '([)]' will return false

// 27. Write the code to return the Substring Without Repeating Characters
// Example -> 'abcabcbb' will return 'abc'

// 28. Write the code for the Flatten a Deeply Nested Array
// Example -> [1,[2],[[3],4],[5]] will return [1,2,3,4,5]

// 29. Write the code for the Fibonacci Sequence
// Example -> 5 will return [0,1,1,2,3]

// You are given an array of numbers. You need to write a function that removes duplicate elements from the array and returns a new array containing only the unique elements.

// Example:
// Input: [1, 2, 2, 3, 4, 4, 5]
// Output: [1, 2, 3, 4, 5]

// const input = [1, 2, 2, 3, 4, 4, 5];
// const uniquValues = (arr)=>{
//     const newArr = []

//     for(let i=0 ; i<arr.length; i++){
//         if(!newArr.includes(arr[i])){
//             newArr.push(arr[i])
//         }
//     }
//     return(newArr)
// }
// console.log(uniquValues(input))

// fabonicci with recursion
// function fibonacciSeries(n, series = []) {
//   if (n <= 0) return series;
//   if (series.length < 2) {
//     series.push(series.length); // First two numbers: 0, 1
//   } else {
//     series.push(series[series.length - 1] + series[series.length - 2]);
//   }
//   return fibonacciSeries(n - 1, series);
// }
// console.log(fibonacciSeries(5));
//30. Find duplicate elements in an array.

// let deuplicate = [];
// let seen = [];
// const find = (arr) => {
//   for (let i = 0; i < arr.length; i++) {
//     if (seen.includes(arr[i])) {
//       deuplicate.push(arr[i]);
//     } else {
//       seen.push(arr[i]);
//     }
//   }
//   return deuplicate;
// };

// // console.log(find([1, 2, 3, 4, 3]));

// const fidDuplicate = ( arr)=>{
//   let dup = []
//   let traversed = []
//   for(let i=0; i<arr.length; i++){
//     if(traversed.includes(arr[i])){
//       dup.push(arr[i])
//     }
//     else{
//       traversed.push(arr[i])
//     }
//   }
//   return dup
// }

// console.log(fidDuplicate([1,2,3,4,5,4,3,2]))

// 31. Merge two sorted arrays without using .sort().
// Input: arr1 = [1, 3, 5], arr2 = [2, 4, 6]
// Output: [1, 2, 3, 4, 5, 6]

// const merge = (arr1, arr2)=>{
//   const res = [...arr1,...arr2].sort()
//   console.log(res)
// }
// merge([1,2,3],[3,6,7,9,1,2])

// function merge(arr1, arr2) {
//   let mergeArray = [];
//   let i = 0;
//   let j = 0;
//   while (i < arr1.length && j < arr2.length) {
//     if (arr1[i] < arr2[j]) {
//       mergeArray.push(arr1[i]);
//       i++;
//     } else {
//       mergeArray.push(arr2[j]);
//       j++;
//     }
//   }

//   while (i < arr1.length) {
//     mergeArray.push(arr1[i]);
//     i++;
//   }

//   while (j < arr2.length) {
//     mergeArray.push(arr2[j]);
//     j++;
//   }

//   return mergeArray;
// }

// console.log(merge([1, 2, 3], [2, 3, 4, 6]));

// 32. factorial
// const factorial = (num) => {
//   if (num === 0 || num === 1) return 1;
//   return num * factorial(num - 1);
// };
// console.log(factorial(1));
// deepseek
// const input  = [1, 2, 2, 3, 4, 4, 5]
// const set = (arr)=>{
//     return [...new Set(arr)]
// }
// console.log(set(input))

// MAP or FILTER
// map() har element par operation karta hai.

// Returned array mein har element modified hota hai.

// Original array ki length aur returned array ki length same hoti hai.

// filter() har element par condition check karta hai.

// Returned array mein sirf woh elements hote hain jo condition ko satisfy karte hain.

// Returned array ki length original array se kam ya equal ho sakti hai.

// const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const modifiedArray = input.map((ele, i, arr) => {
//   return ele * 2;
// });
// // console.log(modifiedArray) //isne sab be operation apply kar dya

// const filteredArr = input.filter((item, i, arr) => {
//   return (item % 2 === 0 );
// }); // filter always return trythy values and does not update the element
// console.log(filteredArr);
// // map, filter, reduce, forEach, find, some, every

// Find duplicates, reverse an array, merge sorted arrays

// const inp = "hello world, how ARE you?"
// const wordsArr = inp.split(' ')

// const res = wordsArr.map((word)=>{
//    return word[0].toUpperCase() + word.slice(1).toLowerCase()
// })

// console.log(res.join(' '))

// Problem:
// Ek array di gayi hai jismein numbers hain. Aapko ek function likhna hai jo array mein se second largest number find kare.

// Example:
// Input: [10, 5, 20, 8, 15]
// Output: 15

// const inp = [10, 5, 20, 8,15];
// let max = inp[0];
// let secondLargest = inp[0]
// const largest = (arr) => {
//   for (i = 1; i < arr.length ; i++) {
//       if (arr[i] > max ) {
//           secondLargest = max
//           max = arr[i]
//       }
//       else if(arr[i]> secondLargest && arr[i] !== secondLargest){
//         secondLargest = arr[i]
//       }
//   }
//   return secondLargest
// };
// console.log(largest(inp));

// Kisi bhi number ke sare digits ka sum nikalne ka function likho.
// Example: sumDigits(123) → 6 (1 + 2 + 3 = 6)

// function sum(num) {
//   let sum = 0;
//   while (num > 0) {
//     sum += num % 10;
//     num = Math.floor(num / 10);
//   }
//   return sum;
// }

// console.log(sum(123347));

// function sum(num) {
//   if (num === 0) return 0;
//   return (num % 10) + sum(Math.floor(num / 10));
// }
// console.log(sum(111113));

// function reverse(num, newNum = 0) {
//   if (num === 0) return newNum;
//   const lastDigit = num % 10;
//   const remain = Math.floor(num / 10);
//   return reverse(remain, newNum * 10 + lastDigit);
// }
// console.log(reverse(123));

// const fact = (num) => {
//   if (num <= 0) return 1;
//   return num * fact(num - 1);
// };

// console.log(fact(3));

// // Check Prime Number:
// const prime = (num, i = 2) => {
//   if (num === 2) return true;
//   if (num % i === 0) return false;
//   if (i * i > num) return true;
//   return prime(num, i+1)
// };

// console.log(prime(15));

// Find Largest Number in Array:
// const arr = [1, 2, 3, 5, 0, 9, 6, 7, 1, 2, 3];
// let max = arr[0];
// const findLargest = (arr, length) => {
//   if (length === 0) return max;
//   if (arr[length - 1] > max) {
//     max = arr[length - 1];
//   }
//   return findLargest(arr, length - 1);
// };
// const length = arr.length;
// console.log(findLargest(arr, length));

// Fibonacci Series:

// const fab = (num, i = 2, series = [1, 1]) => {
//   if (i === num) return series;
//   series.push(series[i - 2] + series[i - 1]);
//   return fab(num, i + 1, series);
// };
// console.log(fab(4));

// let sum = 0;
// const findSum = (num) => {
//   if (num === 0) return sum;
//   sum += num % 10;
//   return findSum(Math.floor(num / 10));
// };
// console.log(findSum(222234519));

// const reverseNum = (num, newNum = 0) => {
//   if (num === 0) return newNum / 10;
//   const lastDigit = num % 10;
//   newNum += lastDigit;
//   return reverseNum(Math.floor(num / 10), newNum * 10);
// };

// console.log(reverseNum(123));
