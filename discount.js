
let running = true;
while(running){
let fullname = prompt("what is your full name" , "");


let firstname = fullname.slice(0 , fullname.indexOf(" "));
let lastname = fullname.slice(fullname.indexOf(' ')); 


alert(`your full name is ${firstname} and your last name is ${lastname}`);
if(fullname.length > 15){
    alert("wow thats a rather long name");
}

if(fullname.length < 5){
    alert("thats a rather short name you have there");
}
doyou=prompt("do you want ot play again ?"  , "");
if(doyou=="yes"){
    continue;
} else{
    running = false;
}
}