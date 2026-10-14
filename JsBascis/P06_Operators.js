
/*
What is javascript Operators.

==> 1. Arithmatice Operator (+,-,*,%)
    2. Unary Operator (It perform operation on one operand) (++ - Increment) (-- Decrement)
    3. Relational Operators (>,>=,<,<=,!==,!===)

        3.1  equal to 
         ==============
          1. Loose Equality ==
          2. Strict Equality ===

   4. Ternary Operator / if-else 
    ==> Condition?true:false;

   5. Logical Operators
    
   1. && (AND) 2. (OR) || 3. (NOT) !

*/

   console.log("================Arithmatic Operator=============");
   
   let num1=50,num2=20;    // we can declare within 1 line also and in second line also 
   console.log(num1+num2);
   
   console.log("Addition is:",num1+num2);
   console.log("sub is:",num1-num2);
   console.log("multiply is:",num1*num2);
   console.log("Divide is:",num1/num2);
   console.log("Modulus is:",num1%num2);

   console.log(10+20);
   
   // Number Constructor

   console.log(Number(true));//1
   console.log(Number(false));//0
   console.log(Number(null));//0
   console.log(Number(undefined));//Nan
   
   
   console.log("================Unary Operator=============");
   /*
   1. ++ (Increment Operator )
    
    1.1 PreIncrement    (++num1) : Meaning num1= num1+1
    ==> Value will incrememnt first and then use it.

    1.2 PostIncrement  (num1++):  Meaning num1 = num1+1
    ==> Value will use first and then increment.

     2. -- (Decrement Operator )
    
    1.1 PreDecrement    (--num1) : Meaning num1= num1-1
    ==> Value will incrememnt first and then use it.

    1.2 PostDecrement  (num1--) : Meaning num1 = num1-1
    ==> Value will use first and then increment.

   */

    // PreIncrement
    let a = 100;
    console.log(a);
    console.log(++a);
    
    // PostIncrement
    let b = 200;
    console.log(b);
    console.log(b++); // It shows current value as output but in the memory its update as 1 so for the updated value need to print again.
    console.log(b);
    

    let i = 199;
    let j = i++;
    console.log(i); // 200  ,, because on the memory it will update by 1. after printing only it shows value
    console.log(j); // 199

    
    let r = 78;
    let q = ++r;
    console.log(r); //79  ,, 
    console.log(q); // 79 ,,
    
    
    // Decremenmt Operators
// PreD
    let y = 10;
    console.log(--y);
    
    // Post D
    let z = 100;
    console.log(z--);
    console.log(z);
    
    /* k = 20 , l=k-- + K++

    k = 20; 

    20 + 20
    19 + 20
    20;
    39
    */
   let k = 20;
   let l = k-- + k++;
   console.log(k);
   console.log(l);
   
   
