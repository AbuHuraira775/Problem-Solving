// JSX & Components
// JS XML ye html ko js ke andar allow karta he 
// it defines the UI 


// hooks 
// features that allow react FC to use state and lifecycle methids withiut using CC 

// lexical scope: apne parent ke scope tak accss hota jise 
// closure: a function remembered his var aven after called in other func 

// call stack : jisme fun pop and push hote filo lifo 
// Event Loop: async opt goes to callback queue or web apis and event loop contineously check the queue to execute the fun 

// we use three dots but their purpose is diff 
// spread: array ya object ke elements ko expand karta 
// used to copy and merging obj 
// rest: store multiple arg in an array 
// use in destructuring  [var1, var2] = [10,20,30,40] -> var2 = [20,30,40]

// Client ek HTTP request bhejta hai
// Server HTTP process karta he
// Server phr response bhejta hai 

// REST API aur GraphQL dono client-server communication ke liye use hote hain, 
// REST API: Multiple endpoints, zyada data ya kam data ata (ye problem he isme)
// GraphQL: Single endpoint hota, concise data, wahi ata jo mangte 
// Facebook, GitHub, Shopify GraphQL use karte hain kyunki ye dynamic queries ko efficiently handle karta hai!


// OAuth: Third-party authorization, Social login (Google, Facebook)

// contrlled component: when use state to manage the state of the form or the com 
// uncontrolled com: when use useRef to get the vlaue direcct from the DOM, dont use useState 

// Reconciliation Algorithm
// react creates the V DOM and updates the neccessary changes 
// when state prop changes new V DOM created and react compared new and old 
// it is using diffing algo 

// if com are same are rendering than it updates the props only 
//  if com are diff than it un mount old and mount new one 
// if list update than it change using key 


// React Fiber Architecture 
