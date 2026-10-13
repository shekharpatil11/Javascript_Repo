
/*

What is hoisting ==> 1. It is behaviour for Js language where variable and functions are hoisted.
                    2. Hoisting means declaration process first before execution.
                    3. var type variable and function declaration is fully hoisted (Means before initialization we can call it)
                    4. Let/const varibales and function exprerssion syntax (Anonymous function, Arrow Function)
                    5. there are part of Temporal dead zone, so before initialization if you try to call it you will see reference error.
*/
//                                      =============================== This is only for the variable =======================================
// 1. for the var will get the undfined --- because its fully hoisted.
//console.log(pname);

var pname = "prajwal";

console.log(pname);


test1();

// 2. So let is also hoisted but let variable is present in the TDZ (Temporal dead Zone)

//console.log(model);

let model = "Iphone 15";
console.log(model);

//                                            ========================= Function Hoisting ================================

// function decalration

// this is possible into the function decalration time only because its fully hoisted so we can call it before function.

function test1()

{
    console.log("Calling function");
}
test1()

// this are the anonymous function and will get the error if will call before the initiallaition  because this is modern syntax
// same goes for the arrow function
// this both syntax comes under the expression functions. 
let farmer= function()
{

    console.log("farmer calling ");
    
}
farmer();