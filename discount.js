const correctanswer = "abc";
const correctpassword = "123";
let asked = 0;

running = true;
while(running){
 
    
    let asking = true;
     
    
    while(running){
      let askid=prompt("enter the id" , "");
    let askpassword=prompt("enter the password", "");
     asked++
      console.log(asked);



    if ((askid || askpassword) == null){
       alert("cancelled");
       running = false;
       break;
    }

    if ((askid || askpassword) == ""){
        alert("you didnt enter a value");
    }

    if((askid !== correctanswer) || (askpassword !== correctpassword)){
        alert("wrong value ");
    } 
    else if((askid == correctanswer) && (askpassword == correctpassword)){
        alert("correct value inputed")
    }

    if(asked >= 5){
        alert("you tried too many times");
        running = false;
        break;
    }

    
    }

    };

    
    
