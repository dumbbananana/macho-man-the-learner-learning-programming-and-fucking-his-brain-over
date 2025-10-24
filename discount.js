
let running = true;
while(running){
let fullname = prompt("what is your full name" , "");


let firstname = fullname.slice(0 , fullname.indexOf(" "));
let lastname = fullname.slice(fullname.indexOf(' ')); 


alert(`your full name is ${firstname} and your last name is ${lastname}`);
doyou=prompt("do you want ot play again ?"  , "");
if(doyou=="yes"){
    continue;
} else{
    running = false;
}
}