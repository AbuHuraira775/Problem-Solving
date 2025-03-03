// Contains Duplicate
// Given an integer array nums, return true if any value appears
// more than once in the array, otherwise return false.

// - EASY

// 1. SOLUTION - Brute Force (without optimization)
// Use two loops to compare each element with every other element in the array

// FUNCTION check(arr)
//     FOR i FROM 0 TO length of arr -1
//         FOR j FROM 0 TO length of arr -1
//             IF arr[i] IS EQUAL TO arr[j]
//                 RETURN true
//             END IF
//         END FOR
//     END FOR
//     RETURN false
// END FUNCTION

// const check = (arr) => {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//       if (arr[i] === arr[j]) {
//         return true;
//       }
//     }
//   }
//   return false;
// };

// PSEUDO CODE:
// DECLARE flag AS BOOLEAN
// FUNCTION check(arr)
//   IF i IS EQUAL TO length of arr -1 
//     RETURN flag
//   END IF
//   IF arr[i] IS EQUAL TO arr[i+1] 
//   SET flag TO true 
//   END IF
//   RETURN check(arr, i+1)
// END FUNCTION

// FUNCTION check(arr)

// first sort the array and than compare with the previous value

// let flag = false;
// const check = (arr, i = 0) => {
//   if (i === arr.length - 1) return flag;
//   if (arr[i] === arr[i + 1]) flag = true;
//   return check(arr, i + 1);
// };

// use set to check the duplicate value
  // make a set 
  // and start the loop on arr 
  // and push the arr element in the set
  // if set has num return true

  // PSEUDO CODE :
  // FUNCTION check(arr)
  //   SET seen AS NEW SET 
  //   FOR EACH num OF arr 
  //     IF seen HAS num 
  //     RETURN true 
  //     END IF
  //   ADD num TO seen 
  //   END FOR
  //   RETURN false
  // END FUNCTION

// const check = (arr)=>{
//   const seen = new Set()
//   for(const num of arr){
//     if(seen.has(num)) return true
//     seen.add(num)
//   }
//   return false;
// }

// make set array of the real array ?
// if any duplicate occurs it will remove automatically
// than the length of the sets will be less that the original

PSEDUCODE :
// FUNCTION check(arr)
//   RETURN new SET(arr).size < arr.length
// END FUNCTION

// let and const is not wowking here 
var check = (arr) => new Set(arr).size < arr.length;

module.exports = check;