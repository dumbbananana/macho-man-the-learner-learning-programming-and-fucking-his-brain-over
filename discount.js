let input = document.getElementById("giventemp");
let cchecked = document.getElementById("checkboxic");
let fchecked = document.getElementById("checkboxif");
let answer = document.getElementById("result");
let temp ;

document.getElementById("button").onclick = function(){
   

   
  
    if(fchecked.checked)
    {
        temp = Number(input.value);
         temp = temp * 9 / 5 + 32 ;
        answer.value = temp.toFixed(1) + "˚f";
        console.log(temp , answer)
        
    } 
    else if(cchecked.checked)
    {
        temp = Number(input.value);
        temp = (temp-32)*5/9 ;
        
        answer.value = temp.toFixed(1) + "˚c";
        console.log(temp , answer)
        
    } 

   
  
};
