
/*

-- What is function ?
--> Define group of statement which performs some functionality.

* JS support 2 types of function.

1. Function declaration
2. Function Exprerssion - (Means assigne function to the variable)
   2.1. Anonymous function (Function without name)
   2.2. Arrow function (short hand function)

 ========= Function declaration Example===========

*/
 function test1()
 {
     console.log("Hello Function");
     
 }

 test1();
 
 /*
  =========== Anonymous Function========= Assign function to the variable

  Example
 */

   let test2 = function()
  
  {
       console.log("This is Anonymous Fucntion")
  }

  test2();
 
   console.log (typeof test2);  

   /*
  =========== Arrow Function========= Assign function to the variable

  Example
 */

  let test3 = ()=>{

    console.log("calling Arrow function");
    
  }

  test3(); 
  console.log(typeof test3);
  