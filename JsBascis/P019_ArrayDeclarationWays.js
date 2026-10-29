/*
1. Array is the dynamic data structure which store collection of data/elements
2. Collection of data
3. Type and Size can be vary
4. As an array is non-primitive and dynamic menas size of array can vary
5. Single variable we used to store collection of data
6. Array is 0 index based

Syntax:

let arrayvariable=[val1,val2,val3....n];

====================
Ways of Declaration

1. Array Literal (Literal menas you are assigning direct constant value to variable or array)
2. Array Constructor
3. Array.of()..... Added in ES6 

================
Types Of Array

1. Single dimension Array (1D)
 
2. Multi Dimension Array (2D)

====================

Iteration ways

1. Simple for loop
2. for...of loop (Array)
3. for...in loop (Object)


*/

console.log("-------------------1. Array Literal -----------------");

let address = ["Mumbai","Pune","Nagar"];

console.log(address);
console.log(address.length);
console.log(typeof address);


console.log("-------------------2. Array Constuctor---------------");

/*
===> This is Constructor

- It is special method used to initialize object
- In js class level object we create using new keyword
- and during object creation we called constructor

Array Constructor
====================

Syntax:

let arrayVariableName = new Array (val1,val2,val3....n);

==> When array constructor declare with one element/value then that element will be consider as length of array.
*/

let data = new Array(10,20,30,40);

console.log(data);
console.log(data.length);
console.log(typeof data);
console.log(data[3]);
console.log(data[5]);


// ==> When array constructor declare with one element/value then that element will be consider as length of array if it is pure number type.
// This is only for number value not for string.
// If you are not use pure number(1,2,3) and you used the decimal (1.3,etc) you will get the error. 

let marks = new Array(4);
console.log(marks); // < 4 Empty items >
console.log(marks.length); // 4
console.log(marks[0]); // undefined 

// Now to fill this empty array ;; so simple\

marks[0] = 100;
marks[1] = 200;
marks[2] = 300;
marks[3] = 400;
marks[4] = 500;

console.log(marks);
console.log(marks.length);
console.log(marks[2]);

// String based example

let loc = new Array("pune");
console.log(loc);
console.log(loc.length);
console.log(typeof loc);

console.log("-----------Array.of()----------------------");

// this is just ways or declaration of Array

let id = Array.of(101,102,1013,1014,105);

console.log(id);
console.log(id.length);
console.log(id[3]);
console.log(id[7]);

// Single value example 

let sid = Array.of(106);

console.log(sid);
console.log(sid.length);






