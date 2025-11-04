function  plus(a , b){
    answer = a + b ;
    console.log(answer)
}
function  muntiply(a , b){
    answer = a * b ;
    console.log(answer)
}
function  divide(a , b){
    answer = a / b ;
    console.log(answer)
}
function  minus(a , b){
    answer = a - b ;
    console.log(answer)
}

let ask = prompt("enter the first number" ,)
let ask2 = prompt("enter the second number" ,)
let ask0  = prompt("what do you want to do?  ", );

if(!(ask && ask2) == ""){
    ask  = Number(ask);
    ask2 = Number(ask2);
  

   if(ask0 == "add"){
    plus(ask , ask2)
   }

    if(ask0 == "minus"){
    minus(ask , ask2)
   }

   if(ask0 == "div"){
    divide(ask , ask2)
   }
   if(ask0 == "by"){
    muntiply(ask , ask2)
   }
}