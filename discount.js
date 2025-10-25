 fn = prompt("enter the first number", "");
 ln = prompt("enter the last number", "");

if((fn || ln) == ""){
    alert("empty value");
} 
if( (fn || ln) == null){
  alert("cancelled");
} else{
    ln = Number(ln);
    fn = Number(fn);
    final = fn + ln;
alert(final);

};