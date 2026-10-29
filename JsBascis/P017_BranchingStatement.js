
/*\ Conatins 3 key word
Break;
--------------
1. break will only applicable on loops and switch case.
2. Break statement will help you to exit from loop and switch case body/Scope.

Continue:
-----------------
1. Continue statment is applicable on loops
2. Continue will skip certain part of your code and continue execution till the end of loop or condition.


return:
-----------------
1. return keyword applicable for function
2. return keyword used to return value/result form the function
3. return statement should be the last statement of function
4. return statemnet always return result to calling function
*/

for(let i = 1; i<=10;i++)
    {
        if(i>=5){
            break;  // exit from loop
        }
        else{
            console.log(i);
            
        }

}

// continue Statement

for(let i = 1; i<=10;i++)
    {
        if(i===8){
            continue;  // skip the iteration from loop and next step will perform
        }
        else{
            console.log(i);
            
        }

}

// it only skip the 8 number 