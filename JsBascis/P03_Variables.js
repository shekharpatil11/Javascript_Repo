
/*
variable
 -- Variable is name of storage location where we can store data

 IN JS we use 3Keyword to declare variable
 ----------------------
 var(older/not recommended), Let (Mutable data ; Use for;  Means , data which will be get changed) , const (Used for : Immutable data : Means ; data will not change)

 Syntax;; 

 1. let variableName= Value;
 Example' let fname='Shekhar'; 

 1) var (Older)
 - Scope - Global scope + Function Scope
 - var is fully hoisted
 - Redeclaration is allowed
 - Reassignment is allowed

 +++++++++ Modern Syntax +++++++++

++++++++ Global Scope --> When data is decalred inside Js file and outside of any function/block is global scope.
                      --> Global data will be accesable everywhere in file.
 2) let
 -Scope - Global + Block scope
 - For mutable data use let
 - let is hoisted bute let initialize in temporal dead zone so if you try to call it before initialization then you will get reference error
 - Redeclaration is not allowed
 - Reassignment is allowed

 3) const
 -Scope - Global + Block scope
 - For Immutable data use const
 - const is hoisted bute let initialize in temporal dead zone so if you try to call it before initialization then you will get reference error
 - Redeclaration is not allowed
 - Reassignment is not allowed


 ++++++++++ What is function in JS / +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
          --> We used to define to perform certain operation.
   Basic syntax of function ;;;;

   # function getdata()      So here , Function = keyword , getdata = function name , () = this indicate this is function , 
                                                                                      this is syntax and mandatory after every function decalration.
   {
      --> here you can declare example
      console.log("age");
      console.log("fname"); etc.
   }

   getdata(); --> Calling syntax
      -- > Function req two steps 1) decalre and 2) calling 
       --> so using this we can use global data into the function.

       ============== Function Scope ============

       --> Any variable you can declare within function you can access it inside the function.
       --> Function scope means local variable 
       --> for var type variable function scope is applicable 
*/

function display()

{
  // Local scope because we declare the variable within function.
   var automationType = "Manual";
   const browser = "chrome";
   let browserVersion = 101;

   console.log(automationType);
   console.log(browser);
   console.log(browserVersion);

    // also we are calling it within function

}

display();

// Calling outside the function then will get the reference error

//console.log(browser);
//console.log(automationType);
//console.log(browserVersion);

 /* ============== Block Scope ============
  Example: if block, forloop, whileloop
  What ever we have mention into this block { } this will be block scope
  --------------- BLoCK SCOPE IS ONLY APPLICABLE FOR THE LET AND CONST KEYWORD.---------------------
  
    Examples: 1    
*/
{

   console.log("Hello");
   
}
  // example 2 

   if (true) {
      
      // within block declare

      let Cname = "Shekhar";
      const location  = "pune";

      // within block calling
      console.log(name, "\n" ,location);  // "\n " for printing next line
      
   }
   
// outside the block calling , so will get the error 
    console.log(Cname);
    

    
    