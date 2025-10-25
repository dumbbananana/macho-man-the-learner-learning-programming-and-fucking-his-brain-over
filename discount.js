alert("wek will convert of f and c");

let ognum = ab=Number(prompt("enter the value you want to convert ", ""));



 if(ognum == "")
    
   {
     alert("cancelled");
   } 

     else if(isNaN(ognum))
        {
     alert("the calue you gave is not a number");
     }


  

else{
     what=prompt("what do you want to convert this inot", "");

     if(what == "")
     {
        alert("empty no value given");
     }

     else if(what== null)
    
       {
          alert("cancelled");
       }   

       else{

        if(what == "f")
        {
          alert(`${ognum} gets turnede into f`)
        }

        if(what == "c")
        {
            alert(`${ognum} gets turnede into c`)
        }

        else
        {
            alert("unavilable")
        }
       }

};
