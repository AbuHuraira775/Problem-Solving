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

function missing(arr) {
  let missings = [];
  let max = arr[0];
  console.log(max);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  for (let i = 0; i < max; i++) {
    if (arr.indexOf(i) == -1) {
      missings.push(i);
    }
  }
  console.log(max);
  console.log(missings);
}

missing([1, 3, 5, 8]);

// 3. Write the code to find indeces of the two elements of the array
// that sum equal to the provided value
// Example -> [1,2,3,4,5,6,7] sum=9
// it will return the indeces of teh 4 and 5 (3,4)

// 4. Write the code for the Palindrome
// Example -> 'madam' will return true

// 5. Write the code for the fibonacci series
// Example -> 1,1,2,3,5,8,13,21,34,55

// 6. Write the code reverse the string and the integer

// 7. Write the code to find the most repeated character in the string

// 8. Write the code to chunk the array into the specified size
// Example -> [1,2,3,4,5,6,7,8,9] size=3
// it will return [[1,2,3],[4,5,6],[7,8,9]]

// 8. Write the code to find the longest word in the string

// 9. Write the code for the Title Case. Every alphabet of the word will be capital
// Example -> 'ali raza' will return 'Ali Raza'

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
