function  plus(a , b){
    answer = a + b ;
    console.log(answer)
}

let ask = prompt("enter the first number" ,)
let ask2 = prompt("enter the second number" ,)

if(!(ask && ask2) == ""){
    ask  = Number(ask);
    ask2 = Number(ask2);
   plus(ask , ask2)
}