const discount = 10;
const cost = 10;
 let play = false ; 
 
document.getElementById("press").onclick  = function(){
while(!play){
let  quantity  = document.getElementById("quantity").value;
  
let purchased = false;

while(!purchased){
    if(isNaN(quantity)){
        alert("please enter a number")
        
        purchased = true;
       play = true ;
    
    } else if(quantity == null) {
        alert("cancelled");
        break;
        play = true;
    } else if(quantity == ""){
        alert("emppty");
    }  
    
    else{
     quantity = Number(quantity);

        if(quantity >= 100){
            
            alert(`you get a discount of 10 which makes your total number ${(quantity * cost)* discount/100}`)
            purchased = true
            play = true;}
            else if(quantity < 1 ){
                alert("so youre gonna borrow from me or what");
            } else{
                alert(`you purchased ${quantity} for the total price  of ${quantity * cost}`);
                purchased = true;
                play = true;
            }

            if(!true){
                doyou=prompt("do you still want to purchase ?" , "");
             if(doyou == "yes"){
                purchased = false;
                alert("thanks for playing");
             } else{
                play = true;
             }
            }
            }
}

        }        
    }
