let rows = 
[
    ["apple", "banana"],
    ["candy", "lolly"],
    ["egg", "fish"]
    
];




let a = true;
while(a){
    let b = true;
let ask = prompt("what do you want ", "");
while(b){
//let ask = prompt("what do you want ", "");
for(let i = 0; i < rows.length; i++)
{
   

  
   let ii = rows[i].indexOf(`${ask}`);

   if(ii != -1){
    i = i +1;
    ii = ii +1;
    alert(`${ask} is found in ${ii} columb if ${i} row`);
    console.log(i);
    console.log(ii);
    b = false;
     a = false;
   }  
   
    if ( ask == null){
    alert("cancelled");
    console.log(i);
    console.log(ii);
    a = false;
    break;
   } 
   
   else if(ask == "") {
    console.log(i);
    console.log(ii);
    alert("empty");
    break;
   } else if( ii == -1){
    alert("not found");
    a = false;
    
   }
}
}  
}
