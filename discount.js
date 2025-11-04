
let list = [];
let days = [];


const students = 32;

let holiday = true;


while( holiday = true){
let attendance = 0;
let day = 1;
    for(day; day < 3 ; day++){
        
 while(attendance < students){

   for(attendance; attendance < students ; attendance ++){

       let attend = prompt(` day ${day}rol no ${attendance + 1}`);
         if(attend == "p"){
           list.push(`${attendance +1} present`)
         }

         else if(attend == "a"){
            list.push(`${attendance + 1} abscent`)
            
         } else {
            list.push(`${attendance + 1} nodata`)
         }
         days.push(list)
   }


  alert(`day ${day} over`);
 break;
 }
}
}
console.log(list)

let ask=  prompt("whpse nimber dp you wanna check", "");
ask = Number(ask)
result = list[ask-1];

console.log(result)
