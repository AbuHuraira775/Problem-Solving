// Q:01 What is shadow DOM?
// Q:02 What is prop drilling?
// Q:03 What is throttling?
// Q:04 What is debouncing?
// Q:05 What is callback?
// Q:06 What is promise?
// Q:07 What is async await?
// Q:08 What is Execution Context?
// Q:09 What is callback hell?
// Q:10 What is SQL and NoSQL?
// Q:11 SQL vs NoSQL?
// Q:12 var vs let vs const?
// Q:13 What is hoisting?
// Q:14 What is arrow function?
// Q:15 What are the states of the promises?
// Q:16 What is the pass by value and pass by reference?
// Q:17 How execution context is created for the var and function?
// Q:18 Props vs state
// Q:19 What is HOC? Give example for the ecommerce website
// Q:20 What is the difference between the Context and Redux? and why use Redux instead of the context in large application?
// Q:21 Is redux store is immutable or mutable?
// Q:22 What is virtual DOM? and waht algo React use to compare the current and the previous DOM?
// Q:23 What is the difference between the map and filter? and give the main difference between them.
// Q:24 is node js is single threaded or multi threaded?
// Q:25 How node.js performs as a multi threaded?
// Q:26 How can run five promisses in parallel?
// Q:27 What does preventDefault() do?
// Q:28 Tell some array methods?
// Q:29 What does useRef do?
// Q:30 does setter update the state (object) when pass by reference?
// Q:31 What is the structure of mongoDB instead of the table (rows and columns)?
// Q:32 What is your FYP?
// Q:33 Did you use GenAI?
// Q:34 What are the types of the data? and what is object and array?
// Q:35 total 9 balls each ball weight is 1kg instead of one ball that is 1.5 kg. 

// CODING... 
// Q:36 Write code for fubunacci series?
// Q:37 Write code for pelledrom?
// Q:38 Write code to find the missing range in the array?
// Q:39 Write code to find the same string instead of the order? like 'ali' and 'lia' are same 
// Q:40 Write code to find the sum of the two numbers and print their indeces?


// ANSWER... 
// 1: shadow dom is a web technology, in it we can create a component and add the code of
// HTML, CSS and JS 
// and it is outisde from the outer document 

// 3: Techinque use to call a function on event after the specific time interval
// call the fucntion once after specific time interval 

// if we have to execute a function after a certain amount of time, based on the event 
// but it countineusly call the function when we start the event so we use the throttling
// like we are scrolling the page and we have to call the function after the 100ms 
// and it increasing the count till scrolling is stop 

// technique used in programming to control how often a particular function 
// can be executed over a specified period of time.
// It ensures that the function is not called too frequently,
// but instead is called only after a certain amount of time has passed.
// The function is executed at regular intervals,

// 4: //technique we use to call the function once after the end of the event 
// like after typing (search) 
// unlike throttling the debounce technique will ensure that a function is not called until a 
// certain amount of time has passed without it being called.
// but it calls the function once after the event is stop


// 6 : it is a JS object that handles async operations.
// it has three states pending, resolve, reject. 
// Promise.all Promise.allSettled Promise.race Promise.any 
// these are used to handle multiple apis parallelly 

// 7:  async means that a function will return a promise.
// await means that we should wait for the promise to resolve before continuing the code execution.
// it is the syntatctic sugar of promise and make it readable 

// 8: Global EC 
// Functional EC
// ye 1 env he jaha js code execute hota he 
// hum jab js code karte ye create hota 
// or ye context code ke var and func and scope ka track rakhta 
// Hoisting Creation Phase mein variables aur functions ke liye memory allocate karne ka process hai.


// 10: SQL is a structured query language that is used to manage the relational database system.
// NoSQL is a non-relational database system that is used to manage the unstructured data.

// 12: var: function scope hota he , hoisted bhi hota he, re assign and redclare allow , not block scope
// let: block scope, means wahi accessible hota he jaha deeclare hwa , hoisted in temporal dead zone, redclae allow 
// const: block ccope , TDZ, redclare and reassign not allowed 

// 13: Hoisting Creation Phase mein variables aur functions ke liye memory allocate karne ka process hai.

// 14: introduced in ES6
// shorter and cleaner syntax of traditoinal function 

// 16: pass by value: when pass arg of primitive data type to uski copy pass hoti na ke ref 
// pass by reference: array and obj (non-pre) iska ref jata menas ye modify ho jaye gen 
// but in state var pass by ref will not re render the com 
// to avoid we use (spread operator..., map) to make new object 

// when deal with primitive data types like string, number, boolean, null, undefined, symbol say it is pass by value   
// when deal with non-primitive data types like object, array, function say it is pass by reference

// 19: ye 1 design pattern he 
// ye 1 fun he jo com as an input leta or new enhanced com return karta 


// 22: ye react ki performance opt technique he 
// react actual dom ki copy provide karta he
// or jab state ya prop change hota to ye srf updated part ko change karte pre DOM se compare karke 
// use diffing algo 

// 23: If we can achieve the map behaviour from the filter so why we use map?
// map modify karta or pure ele ko traverse karta 
// filter just ele me filter karke new arr return karta, ye modify nh krta 
 
// 24: single threaded hai.  event-drien and non-blocking I-O ko perform karta 
// ye js event loop ka use karta to perform multi threaded 

// 25: using libuv and worker thread 

// 26:using Promise.all etc 

// 27: ye js ka method jo kisi event ke default behaviour rokne ke lye use hota 
// Mostly forms, links, right-click, aur drag & drop events me use hota hai.

// 28: push/pop → End se add/remove
// shift/unshift → Start se add/remove
// map → Transform each element
// filter → Extract specific elements
// reduce → Summarize array into single value
// forEach → Loop through array
// find/findIndex → Find elements
// some/every → Boolean checks
// includes → Check existence
// sort → Sort elements

// 29: to target the DOM element 
// record the previiious state 

// 30: no, use spread operator or map

// 31: Database → Tables → Rows → Columns: Database → Collections → Documents → Fields
// fixed schema : flexible schema 
// join : no joins

// 35: What are the best and worst case to find that ball?
// best case: 1 weighing
// worst case: 9 weighing

