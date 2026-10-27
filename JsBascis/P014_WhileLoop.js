
/*

3. do While Loop
 ==> exit controlled loop
 - dowhile loop is applicablle for one time iteration/execution
 
 Sceanrios: one time execution

 Syntax :

 Initialization;
 while(Condition)
 {
 Statments
 increment/decrement
 }
Examples:
*/

let i=1;
while(i<=5){

    console.log("Hello");
    i++;
}

 // sum of digits logic

 let num=123,rem=0,sum=0;

 while(num>0)
    {
        rem=num%10;
        num = Math.floor(num/10);
        sum=sum+rem;
 }
 console.log("Sum of digits",sum);
 


 // how to reverse any number
let num1=123,rem1=0,rev=0;

 while(num1>0)
    {
        rem1=num1%10;
        num1 = Math.floor(num1/10);
        rev=rev*10+rem1

 }
 console.log("Sum of digits",rev);

 if(num1===rev)
    {
        console.log("This is palindorme number");
 }
 else{
    console.log("this is not palindrome number");
    
 }



 // how to check number is palindrome
 // how to check numner is armstrong number 