
/* variable
 -- Variable is name of storage location where we can store data

 IN JS we use 3Keyword to declare variable
 ----------------------
 var(older/not recommended), Let (Mutable data ; Use for;  Means , data which will be get changed) , const (Used for : Immutable data : Means ; data will not change)

 Syntax;; 

 1. let variableName= Value;
 Example' let fname='Shekhar';

 Data Type;
 -----
 - Data types defined what type of data we can store into the variables.
 - AS JS is dynamically typed language so we dont need any data type while declaration of any variable.

 -----------
 Types of Datatypes
 - 1. Primitive data types ; Means ; We store primary data (It works based on data )
   2. NonPrimitive data types ; Means ; Generally store reference of object , array. or we can say memory address. (It works on the address not based on data );

   ======================
    1. Primitive data types (Total wwe have 7);
     
       1. number
       2. string
       3. boolean
       4. undefined
       5. null

       added in ES6
       6. bigInt
       7. symbol (NA in Automation ; we are not using this into automation this is just for the interview)

    2. Nonprimitive data types
    
       IN Js all objects are dynamice objects and objects, array.

++++++++++++++++++++ Type of operator +++++++++++++++

     - To check what type of data we store into variable we have type of operator in Js.
       Example ; ---
       typeof function
       typeof variable
       typeof object
     */

                                                                     console.log("----number type--------------------");
     
      //   1. Number data type 
        
       /*

       Any number which is positive integer/ negative integer/floating point number are number type in Js.
       -- for all the type of number in Js we just need to use the number as datatype no different datatype for the diff number format.
       */

       // let num1 = 101;
       //console.log(num1);
       

       //let num2 = 102;
       //console.log(num2);
       
       let num3 = 103;
       console.log(num3);
       
       // Let :: Keyword // num1 :: variable name // rest is vaiable value //
       // we dont use data type here , but node engine verify what kind of data type is it automaticallly.//

       /* Now if you want some text and with text we need the result is called concating , so we can use the '+' or the simply ',' for that.
       eample is given below */

       let num1 = 101;
       console.log("num1 value is:",num1);

       /* and now if want to find the which kind of data we have store in variable for that we use the typeof operator,
       example is given below */

       let num2 = 102;
       console.log(num2);
       console.log(typeof num2);
       
       /* so when we need to use the bigint data type , or when we need to save the big number into the variable and
        just want to know the type of operator of that number, so after the value just use 'n'

        for example 

        let num5 = 1232342234534534n;
        console.log (typeof num5);

        as result you will get the bigint. */

                                                                        console.log("----boolean Type---------------");

         /* boolean: true / False 
         example given below
         */
         
         let isActive = true;
         console.log("My sim is active ?",isActive);
         console.log(typeof isActive);
         

                                                                         console.log("---------string Type---------------");
        /* String is collection of the characters
        String is primitive types.
        String is dynamic object. 
        NOTE ; IN Js we dont have any char type (Means we cant store single character) we need to collect into the string only.
        
        
        Ways to decalre string

        1. Single quoat 'Hello'
        2. double quoat "Hello"
        3. template string (added after ES6) : back tick = `Hello` ;;; When we need to store the 3 4 lines of data that time we will use back tick.
        */

        let fname = 'Shekhar';
        let emailId = "shekhar.dhawle11@gmail.com";
        let location = `pune`;

        console.log(fname);
        console.log(typeof fname);
        
        console.log(emailId);
        console.log(location);
        
        // ------------------------------------------ Example of template string (back tick) 

        let profile = `My name is ${fname}, I am senior QA anaylst having the 4 years of experience as salesorce QA at the IOPEX,
        working on the sales and the service cloud and currently locartion is pune and working from the pune as well`

        console.log(profile);
          

        /* when we need to use the any variable value into the template string so for that follow the syntax 
         
         Syntax = ${variableName}, -- thats it. */

                                                                 console.log("---------undefined Type---------------");

          /* If any variable declare without initialization then value and type of that variable is undefined.
          if you just declare variable but dosent mention its value called undefined.
          example : */
          
          let age;
          console.log(age);
          console.log(typeof age);
          
                                                                  console.log("---------null Type---------------");

          /* null means unknow value/ intentionally we can write some data as null
          
          What is typeof null?
          - type of null will be always object.
          -legacy bug is Js language. */  

                                                                 console.log("---------symbol Type---------------");
         /* It is used to create unique keys in Js object
         In Js object is collection of keys and values.
         
         object ways: 
         1. Object Literal
         2. Class level Object
                3 and 4 we are not going to use it in automation.
         3. Constructor function
         4. Prototype based object (Object.create()); */

                                                      console.log("---------Nonprimitive data Type---------------");


/* 1. Any variable you declare in Js with {}; this syntax then this will be the object.
Object Non primitive data type.
1) // Object Literal 
Example:
let user {};  ---------- now user is Js object.

2) Array : Dynamic data structure and collection of values we can store with one variable.  
        : In Js array also a object.
        Syantax : let userId []; ---- this is for the array
        Example :
        let userId = [101,102,103,104];
        console.log(userId);
        console.log(typeOf userId); -- Object.

3) Object with key and value
*/

   let person = {
   id:101,
   lname:"shekhar"
   };

   console.log(person);
   console.log(typeof person);
   
   /*
   ---- To access properties from object we have two anotations in Js----

   1) dot notation ; Syntax ;; objectName.key
   2) bracket notation ; Syntax :; objectName ["key"]
   */

   console.log(person.id);
   console.log(person['lname']);

   // Add new property

   person.address= "Pune";
   console.log(person);
   
   // Modify any property

    person.id = 105;
    console.log(person);
    

   // delete any property
   
    delete person.address;
    console.log(person);
    
    

   