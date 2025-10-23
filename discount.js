const min = 50;
const max = 100;
const correct = Math.floor(Math.random() *(max - min)+ 1);

let answer;
let running = true;


while(running){
   answer = prompt("entera number", "");
answer = Number(answer);
   if(isNaN(answer)){
     alert("no number added");
   } 
   
    else if(answer === ""){
       
      alert("add a number");
   } 
   
   else if( !(answer = correct)){
      alert("wrong number");
   }
    else{
      alert("you guessed correctly");
      running = "";

   };
   
};