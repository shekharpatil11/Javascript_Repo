
/*

==> For validate single true condition.
...........Syntax of Simpleif..........

If (Condition)
{
     True()
}

*/

// validate current year

let currentYear=2026;

if(currentYear===2026)
    {
        console.log("Current year match");
        
}

/*
String Validation
1. For string equality use ===
2. for partial match use includes() method

Example ... test for protocol (https)
*/

let acturl = "https://www.Google.com";
 
if(acturl.includes("https"))
    {
console.log("URL is valid");
}

// Equality
// In this case sensitive also matter

let expUrl="https://www.google.com";

if(acturl===expUrl)
    {
          console.log("Validate with equality perfect match");
}