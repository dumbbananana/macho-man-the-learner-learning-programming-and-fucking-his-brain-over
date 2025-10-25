const correctanswer = "abc";
const correctpassword = "123";
let asked = 0;

running = true;
while(running){
 
    
    let asking = true;
     
    
    while(asking){
      let askid=prompt("enter the id" , "");
    let askpassword=prompt("enter the password", "");
     asked++
      console.log(asked);



    if ((askid || askpassword) == null){
       alert("cancelled");
       asking = false;
       running = false;
       break;
    }

  

    if(askid !== correctanswer || askpassword !== correctpassword){
        alert("wrong value ");
    } 
    else if((askid == correctanswer) && (askpassword == correctpassword)){
        alert("correct value inputed")
        asking = false;
        running = false;
    }

    if(asked >= 5){
        alert("to many actions");
        running = false;
        break;

    }
    
    }

    };

    
    
