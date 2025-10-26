let rows = 
[ 
["apple" , "banana" , "mango"] ,
["suppa" , "duppa" , "muppa"] ,
["bananapie" , "smottie", " butterchicken"]
];

let ask = prompt("what do you want ?" ,"");

for( let i = 0; i<rows.length; i++){
   let ii = rows[i].indexOf(`${ask}`);
   if(ii !== -1){
    alert(`${ask} is in ${i + 1} row`);
   }
}