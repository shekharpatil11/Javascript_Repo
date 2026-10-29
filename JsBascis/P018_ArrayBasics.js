
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

// Explaing Array Literal 

let StudentId = [101,102,103,104,105];

console.log(StudentId.length); // length method used for to calculate the length of array

console.log(StudentId[2]);

console.log(StudentId[7]); // If index number is wrong then JS shows the Undefined.

console.log(typeof StudentId);

//=======================================================
// Mixed type of array

let empdata = ["prajwal","Pune","G", 69, 6666666, false];

console.log(typeof empdata);
console.log(empdata);
console.log(empdata[4]);
console.log(empdata.length);
console.log(typeof empdata[0]); // then this will give the 0 number values data type. 

// traditional loop to itreate array

for(let i =0; i<empdata.length;i++)
{
    console.log(empdata[i]);
} 


/*
for..of loop  ::::::::::::::::> This is the simple way to iterate the Array . or to get the array data

- It is applicable for array and String
- Iterated over values
Syntax:

for(let i of Arrayname)
{
log.console(i);

}

*/

console.log("---------------for..of loop---------------------");

for( let i of empdata){
   
    console.log(i);
    
}

console.log("======================for..in loop====================");

/*
================== For..in Loop
1. It is applicable for object
2. Iterated over keys or index

Syntax

for(let i in Arrayname)
{
log.console(i);

}
*/

console.log("---------------for..in loop---------------------");

for( let i in empdata){
   
    console.log(i);
    
}

// for..in loop ==> It always give the index rank like 0,1,2,3 not values of indexing
// so for this reason we only use the for of loop.
