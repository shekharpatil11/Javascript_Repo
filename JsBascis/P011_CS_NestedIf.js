
/*
Nested if help to validate multiple conditions
Sceanrio:
Find student grade based on their marks

If marks are greater than or equal to 95 , display A++ grade
If marks are greater than or equal to 90 but less than 95 then display A grade otherwise grade B 
otherwise display B grade
*/

let marks = 89;

if(marks>90){

    if(marks>=95)
        {
            console.log("A++");

    }
    else{
        console.log("A");
        
    }
    }
else{
    console.log("B");
    
}


