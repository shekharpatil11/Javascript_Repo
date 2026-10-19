
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
   
   console.log("===============Short Hand Operators===============");
/*
   +=,-=,*=,%=
*/
   
let t = 10;
console.log(t);
t+=20;  // (+= : Means t + 20 ;; We do the addition into that  )
console.log(t);

let v = 100;
console.log(v);
v-=50;  // (-= : Means t - 20 ;; We do the sub into that  )
console.log(v);

let h = 10;
console.log(h);
h*=3;  // (*= : Means t * 20 ;; We do the Multiply into that  )
console.log(h);

 console.log("===============Relational Operators===============");

 
 /*
 <,<=,>,>=,!==,!===

 Equality 
 1.Loose Equality ==   (IN LE value will coerced menas ; Type will convert first and then value compare) ==== Not recommended in automation
 2. Strict Equality === (In SE value will qas it it compare no conversion) ==== Recommeded

 Test data

 -- here we used the existing variable value as test data
 -- Realtional value always give result into boolean
 -- I have give only greater than example remaing is same and simple
 */

  console.log("Greater than > : "+(v>h)); // true
  console.log("Greator than equal to ",(t>=h)); // true

// Equality Examples : 

console.log("100" == 100); /// here in loose eq, it will convert string into number and give the result as true // result is true
console.log("100" === 100); // here in Strict eq, it will dont convert the type of value and simple compare and give result  // result is false

console.log("=============== Logical Operators===============");

/*
C1        C2      &&(AND)          ||(OR)            !(NOT) 
true      true    true
true      false   false
false     false   false
false     true    false 

Simple hai 2 condition true aslya tr AND true return karel
Ani 1 jri condition true asli tr OR true return karel
NOT- - Means if the condition is true then it will return false and if condition is false it will written true
*/

console.log((v>h)&&(t===h));
console.log((v<h)&&(t===h));

// NOT Operator Example // 

console.log((t===h)); // True
console.log(!(t===h)); // false 

let actTitle = "Shekhar";
let expTitle = "Shekhar";
console.log(!(actTitle===expTitle));

console.log("=============== Ternary  Operators===============");

/*
It is short operator for the If-Else
Syntax
 Condition?true:false;


let age = 20;
if(age>=18)
   {
 console.log("Adult");

}
else
   {
     console.log("Minor");
     
}
// rather than this you can simply write as per the syntax of ternary operator
*/
let age = 10;
age>=18?console.log("Adult"):console.log("minor");

 
                                      // ASSIGNEMNET ON THE OPERATOR 

     console.log(false+1); // Ans: 1 , Becuase in JS false value is 0 so 0+1 = 1
     console.log(null+1); // Ans:1, Becuase in JS null value is 0 so 0+1 = 1
      console.log(true+1); // Ans: 2 , Becuase in JS true value is 1 so 1+1 = 1
      console.log(0/0); // Ans: Nan , NOt a Number 
      console.log("hi"/0); // Ans: Nan, Hi is not number
      console.log(90/0); // Ans; Infinity , In Js if any numner gets divied by 0 then answer is infinity
      console.log(""+10);// Ans: 10 , becuase " "+ just concating sign
      console.log(undefined+100); // Ans; Nan , Undefined is not number
      console.log(true+true);// Ans; 2 
      
      
                                      