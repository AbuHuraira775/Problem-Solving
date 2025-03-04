// it is shorthand syntax of writing function

// introduced in advanced JS

// It provides most concise way to define functions 

// And handle the `this` keyword differently 

// If we have one expression so it can be more concise, means no need to write `return`keyword and `{}`

// `const square = x => x * x;`

// If there is parameters so we can write empty parenthesis

// If we have one parameter than we can skip the parenthesis 

// `const square = x => x * x;`


// It cannot be used as a Constructor, means we cannot use it with new keyword because it has no its own this

// const Person = (name)=>{
//     this.name = name
// }  show error

// function Person(name) {
//     this.name = name;   
// }

// const p = new Person('John'); // Creating a new Person instance
// console.log(p); // Outputs: Person { name: 'John' }

// const obj = {
//     name: 'John',
//     greet: function(){
//         return `Hello ${this.name}`
//     }
// }
// console.log(obj.greet()); // Outputs: check { name: 'John', age: 23 }

// Regular functions have an argument objects but arrow functions have not

// function argum(){
//     console.log(arguments);
// }
// console.log(argum(['huraira'])); // Outputs: [Arguments] { '0': 1, '1': 2, '2': 3, '3': 4, '4': 5 }

// const arrFun = ()=>{
//     console.log(arguments);
// }

// console.log(arrFun(1,2,3,4,5)); // Outputs: ReferenceError: arguments is not defined
