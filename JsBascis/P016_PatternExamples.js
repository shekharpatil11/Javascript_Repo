
/*
logic
always start with the ::  row/column/value
outerloop __ Row ;; Inner loop __ Logic
For expected result : First collect row wise result and then print it.
*/



for (let r=1;r<=4;r++)
    {
        let row = "";
        for(let c=1;c<=4;c++)
            {
             row=row+"*";
        }
        console.log(row);
        

}