
/*
Ladderif statement will help to excute multiple conditions.
Example
*/

let a=800,b=800,c=900;

if(a>b && a>c)
    {
        console.log(`${a} is greater number`);
}
else if (b>a && b>c)
    {

    console.log(`${b} b is greater Number`);
}
else if (a===b && b===c)
    {
        console.log(`${a,b,c}All number are equal`);
}
 else {
    console.log(`${c} c is greater than all`);
}


//----------------------------------------------------------

// NOTE; If the declare data we need to match with another data and there is lower case upper case issue so please
// convert that decalre data into the case as per need.

let browsername = "chrome".toUpperCase();

if (browsername === "CHROME")
    {
        console.log("Test should run on the chrome");

}
else if(browsername === "webkit")
{
    console.log("test should run on the webkit");
}
else if (browsername === "firefox")
    {
        console.log("Test should run on the firefox");
}
else{
    console.log("Test should be wait for browser platform");
    
}

/*
String Conversion into upper case to lower case and vice versa
we have two methods in Js.

1. toUpperCase()
2. toLowerCase()

Examples
*/
console.log("prajwal".toUpperCase());
console.log("PRAJWAL".toLowerCase());
