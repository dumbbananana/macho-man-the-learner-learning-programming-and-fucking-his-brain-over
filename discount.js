const min = 50;
const max = 100;


let running = true;

while(running) {
    
   const correct = Math.floor(Math.random() *(max - min)+ 1);
console.log(correct);

 let guessed = false;

while(!guessed){
   let guess=prompt("please guess a number", "");
   
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
     

     if(guess < correct){
      alert("little higher");
     }

     else if( guess > correct){
      alert("little lower ")
     }
     
     else if(guess === correct){
        alert("correct");
        guessed=true;

 };

 if(guessed){
   wanna=prompt("wanna play again ?" , "");
   if(wanna !== "yes"){
      running=false;
      alert("thanks for playing");
   };
 }
   
   }
}