const min = 50;
const max = 100;
const correct = Math.floor(Math.random() *(max - min)+ 1);
console.log(correct);
let answer;
let running = true;

while(running){
   guess=prompt("please guess a number", "");
   
   if(guess == null){
      alert("cancelled");
      break;
   } 

    if(guess === ""){
      alert("no number inputed");
      continue;}


    if(isNaN(guess)){
      alert("please enter a number");
      continue;
   } 
    guess = Number(guess);
     if(guess!==correct){
      alert("not the correct nnumber");

     }else if(guess === correct){
        alert("correct");
        running=false;
     } 
     else{
      alert("wrong");
     }
     
   
};