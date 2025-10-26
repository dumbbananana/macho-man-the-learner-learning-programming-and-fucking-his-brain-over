let rows = 
[
    ["apple", "banana"],
    ["candy", "lolly"],
    ["egg", "fish"]
    
];

let a = true;



let ask = prompt("what do you want ", "");
for(let i = 0; i < rows.length; i++)
{
   

  
   let ii = rows[i].indexOf(`${ask}`);

   if(ii != -1){
    i = i +1;
    ii = ii +1;
    alert(`${ask} is found in ${ii} columb if ${i} row`);
    console.log(i);
    console.log(ii);
    break;
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
   } 
}
   if(a = false){
    prompt("do you want to check again")
 

}
