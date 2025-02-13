// Q:01 What is shadow DOM?
// shadow dom is a web technology, in it we can create a component and add the code of
// HTML, CSS and JS 
// and it is outisde from the outer document 

// encapsulate the internal structure and styling of a component, 
// ensuring it doesn't interfere with or get affected by the rest of the page. 

// Q:02 What is prop drilling?

// Q:03 What is throttling?

// Techinque use to call a function on event after the specific time interval
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



// // Q:04 What is debouncing?
//technique we use to call the function once after the end of the event 
// like after typing (search) 
// unlike throttling the debounce technique will ensure that a function is not called until a 
// certain amount of time has passed without it being called.
// but it calls the function once after the event is stop

// Q:05 What is callback?

// Q:06 What is promise?
// it is a JS object that handles async operations.
// it has three states pending, resolve, reject. 
// Promise.all Promise.allSettled Promise.race Promise.any 
// these are used to handle multiple apis parallelly 


// Q:07 What is async await?
// async means that a function will return a promise.
// await means that we should wait for the promise to resolve before continuing the code execution.
// it is the syntatctic sugar of promise and make it readable 

// Q:08 What is Execution Context?
// Global EC 
// Functional EC
// ye 1 env he jaha js code execute hota he 
// hum jab js code karte ye create hota 
// or ye context code ke var and func and scope ka track rakhta 
// Hoisting Creation Phase mein variables aur functions ke liye memory allocate karne ka process hai.

// Q:09 What is callback hell?

// Q:10 What is SQL and NoSQL?
// SQL is a structured query language that is used to manage the relational database system.
// NoSQL is a non-relational database system that is used to manage the unstructured data.


// Q:11 SQL vs NoSQL?
// Q:12 var vs let vs const?
// var: function scope hota he , hoisted bhi hota he, re assign and redclare allow , not block scope
// let: block scope, means wahi accessible hota he jaha deeclare hwa , hoisted in temporal dead zone, redclae allow 
// const: block ccope , TDZ, redclare and reassign not allowed 

// Q:13 What is hoisting?
// Hoisting Creation Phase mein variables aur functions ke liye memory allocate karne ka process hai.

// Q:14 What is arrow function?

// intriduced in ES6
// shoeter and cleaner syntax of traditoinal function 

// Q:15 What are the states of the promises?
//  pending, resolved, rejectd
// Q:16 What is the pass by value and pass by reference?
// pass by value: when pass arg of primitive data type to uski copy pass hoti na ke ref 
// pass by reference: array and obj (non-pre) iska ref jata menas ye modify ho jaye gen 
// but in state var pass by ref will not re render the com 
// to avoid we use (spread operator..., map) to make new object 

// when deal with primitive data types like string, number, boolean, null, undefined, symbol say it is pass by value   
// when deal with non-primitive data types like object, array, function say it is pass by reference

// when we clone the array or object and change the value of the cloned object or array it will change the value of the original object or array
// Q:17 How execution context is created for the var and function?
// Q:18 Props vs state
// Q:19 What is HOC? Give example for the ecommerce website
// ye 1 design pattern he 
// ye 1 fun he jo com as an input leta or new enhanced com return karta 

// Q:20 What is the difference between the Context and Redux? and why use Redux instead of the context in large application?
// Q:21 Is redux store is immutable or mutable?
// Q:22 What is virtual DOM? and waht algo React use to compare the current and the previous DOM?
// ye react ki performance opt technique he 
// react actual dom ki copy provide karta he
// or jab state ya prop change hota to ye srf updated part ko change karte pre DOM se compare karke 
// use diffing algo 

// Q:23 What is the difference between the map and filter? and give the main difference between them.
// If we can achieve the map behaviour from the filter so why we use map?
// map modify karta or pure ele ko traverse karta 
// filter just ele me filter karke new arr return karta, ye modify nh krta 
 
// Q:24 is node js is single threaded or multi threaded?
// single threaded hai.  event-drien and non-blocking I-O ko perform karta 
// ye js event loop ka use karta to perform multi threaded 


// Q:25 How node.js performs as a multi threaded?
// using libuv and worker thread 
// Q:26 How can run five promisses in parallel?
// using Promise.all etc 
// Q:27 What does preventDefault() do?
// ye js ka method jo kisi event ke default behaviour rokne ke lye use hota 
// Mostly forms, links, right-click, aur drag & drop events me use hota hai.

// Q:28 Tell some array methods?
// push/pop → End se add/remove
// shift/unshift → Start se add/remove
// map → Transform each element
// filter → Extract specific elements
// reduce → Summarize array into single value
// forEach → Loop through array
// find/findIndex → Find elements
// some/every → Boolean checks
// includes → Check existence
// sort → Sort elements
// Q:29 What does useRef do?
// to target the DOM element 
// record the previiious state 

// Q:30 does setter update the state (object) when pass by reference?
// no, use spread operator or map
// Q:31 What is the structure of mongoDB instead of the table (rows and columns)?
// Database → Tables → Rows → Columns: Database → Collections → Documents → Fields
// fixed schema : flexible schema 
// join : no joins

// Q:32 Write code for fubunacci series?

// Q:33 Write code for pelledrom?

// Q:34 Write code to find the missing range in the array?

// Q:35 Write code to find the same string instead of the order? like 'ali' and 'lia' are same 
// Q:37 total 9 balls each ball weight is 1kg instead of one ball that is 1.5 kg. 
// What are the best and worst case to find that ball?
// best case: 1 weighing
// worst case: 9 weighing

// Q:38 What is your FYP?
// Q:39 Did you use GenAI?
// Q:40 Write code to find the sum of the two numbers and print their indeces?

// Q:41 What are the types of the data? and what is object and array?