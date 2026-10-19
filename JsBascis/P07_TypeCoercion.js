
/*
Type casting ? 
==> One type of data we can convert into another type

2 types of type casting

1. Implicit ==> Menas automatic conversion , java script engine convert it automatically
2. Explicit Casting ==> Means Manual conversion (Applicable only for 1. String , 2. Number, 3.Boolean) 
                    ==> In js we use constructors 1. Sting () 2. Number () 3. Boolean ()
 
 NOTE : For type conversion data type must be compatible
 
 Boolean Conversion
 1. Truthy value ==> Any true value in boolean context we called truthy value.
                 ==> Example any nonzero value , non empty string
 2. falsy value ==> Any false value in boolean context we called truthy value.
                 ==> Example 0, ""(empty string), null , undefined, Nan

*/

console.log("------------String Conversion-------------");
/*
When an expression combine string , number and boolean value with + operator then number and boolean values
are automatically convert into string and string concatinates these value.

number/boolean---------> String
*/
let a = "Hello"+100+true;
console.log(a); // Hello100true
console.log(typeof a); // String

let b = 100+true+"Hello";
console.log(b); //101Hello
console.log(typeof b); // String

let c = true+200+"Hello";
console.log(c); //201Hello
console.log(typeof c); // String

console.log(100+false+"50"+false); // 10050false 
