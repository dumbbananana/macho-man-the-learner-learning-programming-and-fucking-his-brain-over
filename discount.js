const password = abc;
const user = abc;

 ask = prompt("whose here ?" , "");
 if (!(ask == user)){
    alert("i dont know you");
 } else if (ask == ""){
  alert("cancelled");
 } else{
    ask2=prompt("whats the password" , "");
     if (!(ask2== password) ){
       alert("wrong password");
     } else if(!(ask2== "")){
        alert("welcome");
     } else{
        alert("cancelled");
     }
 };
