/*

using switch case we can handle multiple condition.
Performance wise switch case is better than ladder and Nested if.

break
---------
-> Break is applicable for switch and loop
-> break will exit the control from switch and loop body/scope

key === value

======= Syntax

switch(key){
case value:
    break;
    
    default:
        break;
        }

        Example;
*/

let colour = "black";

switch (colour) {
    case "green":
        console.log("Go");
         break;

        case "red":
        console.log("Stop");
         break;

        case "Yellow":
        console.log("Ready");
        break;

    default:
        console.log("Wait");
        
        break;
}

// Break is mandatory  after every case so we can get the correct outpur, if we domnt add break then will get wrong output it because it takes the control outside the that case. 