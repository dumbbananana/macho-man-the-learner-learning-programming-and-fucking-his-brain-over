const min = 50;
const max = 100;
const correct = Math.floor(Math.random() *(max - min)+ 1);
console.log(correct);
let answer;
let running = true;

while(running){
   guess=prompt("guessa number", "");
   

   if(guess === ""){
      alert("please enter a number");
   }
    else if(guess === null){
      alert("cancelled");
      running=false;
} 


guess=Number(guess);
if(isNaN(guess)){
  alert("not a number");
} 
else if( guess !== correct){
   alert("wrong guess");
} 
else{
   alert("correct !!");
   running = false;
}
};