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

     if (rn1==7 && rn2==7 && rn3==7){
        window.alert("waw a jackpot");
     }

  

}