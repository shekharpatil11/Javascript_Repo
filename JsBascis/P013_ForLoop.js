
/*
Loop ==>
    1. for number of iteration we use loop

1. For Loop ==> When number of iterations are fixed then we used for loop.

 == Syntax
  for (initialization;condition;index)
  {
  Statement;
  }

Scenarios;
 a. Automate Calender/date picker
 b. Dropdown, list, menu with fixed number of options.


 2. While Loop ==> Entry controlled loop
    - When number of iterations are not fixed there we used while loop.
    
    Sceanrios;
    a. Pagination logic (webtable automation)
    b. pagelayout timeout logic

 3. do While Loop
 ==> exit controlled loop
 - dowhile loop is applicablle for one time iteration/execution
 
 Sceanrios: one time execution


 ==== Working Array/Object

 4. For..of loop
 ==> its iterated over values and its applicable for array and string.


 5. for...in loop
 ==> for in loop iterated over keys and index, it is applicable for object.
*/

                            console.log("=================For Loop Example==============================");
                           
  for(let i = 1; i<=5;i++)
    {
        console.log(i);
        
  }                          

  for(let j = 10;j>=1;j--)
    {
        console.log(j);
  }

  // Example ; Factorial of Number

  let fact = 1;
  for(let i = 5; i>=1; i--)
    {
        fact = fact*i;

  }
  console.log(fact);
  
  // sum of natural numbers
  
  let sum = 0;
  for(let i=1;i<=100;i++)
    {
        sum = sum+i
  }
  console.log(sum);
  

  // Loop with condition statement

  for (let i = 1; i<=20; i++)
    {
        if(i%2===0)
            
            {
                console.log("even Number",i);

        }


  }