const press = document.getElementById("press");
const number1 = document.getElementById("number1");
const number2 = document.getElementById("number2");
const number3 = document.getElementById("number3");
const min = 1;
const max = 7;


press.onclick = function(){
    rn1 = Math.floor(Math.random () * (max) ) + min;
   number1.textContent = rn1 ;
    rn2 = Math.floor(Math.random () * (max) ) + (min);
     number2.textContent = rn2 ;
    rn3 = Math.floor(Math.random () * (max) )+ (min);
     number3.textContent = rn3 ;

     document.getElementById("congrats").textContent = ` waw you ggot ${rn1} ${rn2} ${rn3}`



   
  

}