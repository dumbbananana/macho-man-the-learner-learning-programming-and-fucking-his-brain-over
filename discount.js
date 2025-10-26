let rows = 
[ 
["apple" , "banana" , "mango"] ,
["suppa" , "duppa" , "muppa"] ,
["bananapie" , "smottie", " butterchicken"]
];


 let a = true;
let b = true;

while(a){
    let ask;
     ask = prompt("what do you want ?" ,"");

while(b){

    
for( let i = 0; i<rows.length; i++){

  let ii ;
    ii = rows[i].indexOf(`${ask}`);
   if(ii !== -1){
    alert(`${ask} is in ${i + 1}  row and ${ii+1} columb`);
     an=prompt("do you need anythign else ?", "");
     if( an =="yes"){
        break;

     } else{
        alert("exited");
        a= false;
        break;
    
     }
   } else{
    alert("item not found");
    b = false;
     break;

   }
}
}
};
