let username = "ashish" ;
let password = "123@gmail.com" ;

document.getElementById("button").onclick = function() {
   userinput = document.getElementById("input1").value ;
   passinput = document.getElementById("input2").value ;

   if (username == userinput && password == passinput){
     window.alert("correct work ma nigga")
   } else{
    window.alert("you the dumbest nigga i know")
   }
}