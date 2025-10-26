let rows = 
[
    ["a", "b"],
    ["c", "d"],
    ["e", "f"]
    
];
//

let ask = prompt("what do you want ", "");
for(let i = 0; i < rows.length; i++)
{
  
   let ii = rows[i].indexOf(`${ask}`);

   if(ii != -1){
    i = ii +1;
    ii = ii +1;
    alert(`${ask} is found in ${ii} columb if ${i}`)
    break;
   } else if ( ask == null){
    alert("cancelled")
    break;
   } else {
    alert("you value is not found")
   }
}

