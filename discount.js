
const mmid = 1314 ;

document.getElementById("btn").onclick = function() {
    ab = document.getElementById("amount").value ;
    ab = Number(ab);
    mid = document.getElementById("account").value;
    

   if(mid == mmid){
    let amt =  ab >= 100  ? 10 : 0;
    let final = ab - ab * (amt/100);
   document.getElementById("final").textContent = `${final}`;

   }
    else{
 window.alert("wrong membership ")
let amt =  ab >= 100  ? 5 : 0;
 let final = ab - ab * (amt/100);
document.getElementById("final").textContent = `${final}`;
   }

    
}