let giventemp = document.getElementById("ogtemp");
let coinc = document.getElementById("checkboxic");
let coinf = document.getElementById("checkboxif");
let result = document.getElementById("result");
let temp;

function convert(){
if(coinc.checked){
  temp = (giventemp.value);
  temp = temp * 9 / 5 + 32;
  result.textContent = temp.toFixed(1) + "˚c" ;
 
}
}