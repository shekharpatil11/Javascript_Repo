
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
 
console.log("------------Number Conversion-------------");

/*
String/Boolean ==>
    When an expression combines string, boolean, and number values with arithmatic operator (here we are not using + becuase if we use + the rule will change to concating)
    (-,/,*,%) then string and boolean values automatically converting to number type.
   - Number conversion is only possible for string when string data/value is compatible. 
*/

let x = "hello"-100;
console.log(x); // NaN
console.log(typeof x); // Number

let y = "100"/10;
console.log(y);
console.log(typeof y);

// Expression have boolean data
// Boolean value with arithmatic expression always convert into the number.
console.log(true+50); //51
console.log(false-100-50); //-150


let e = 100-"50"/true; // 50
console.log(e);
console.log(typeof e); // Number


let f = 90-"30"+true;
console.log(f); // 61
console.log(typeof f);// Number

console.log("------------Explicit Casting -------------");

console.log("------------Number () -------------"); // Number contructor

// String---> Number
// 
let s1 = "1234";
console.log(s1);
console.log(typeof s1);
let StringTONum = Number(s1);
console.log(typeof StringTONum);


console.log("------------String () -------------"); // String contructor

let s = 500;
console.log(s);
console.log(typeof s);
let NumTOString = String(s);
console.log(NumTOString);

console.log(typeof NumTOString);

// For Boolean Data -------------

console.log(Number(true)); // 1
console.log(Number(false)); // 0 boolean value gets convert into the number .

// Sceanrio : Validate bill amount
// test for amount should be less than 10000
/// For this we need to use array for to get only the number from the whole string.

let bill = "your bill amount is 6000";
let result = bill.split(" ");
console.log(result);
let getdata= result[4];
let StringToNumber = Number(getdata);
console.log(StringToNumber);
console.log(typeof StringToNumber);

let totalbudget = 10000;

if (StringToNumber<totalbudget)
    {
console.log("true");
}
else
{
    console.log("false");

}


console.log("------------String Conversion-------------");

console.log(Boolean(true)); // true
console.log(Boolean("jay")); // True
console.log(Boolean(100)); // True
console.log(Boolean('T')); // True
console.log(Boolean(" ")); // True (Consider Empty Space)
console.log(Boolean(87.78)); // True


console.log(Boolean("")); // false
console.log(Boolean(0)); // false
console.log(Boolean(NaN)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean(null)); // false
console.log(Boolean(false)); // false

