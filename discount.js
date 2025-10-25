let given=document.getElementById("giventemp") ;
let checkifc=document.getElementById("checkboxic");
let checkiff=document.getElementById("checkboxif");
let result=document.getElementById("result");
let temp;


document.getElementById("button").onclick = function (){
  
temp = Number(given.value);

if(temp == "")
{
    alert("please enter a number ")


}

else{
  
if(checkifc.checked)
{
    temp = (temp - 32) * (5/9);
    result.value = temp.toFixed(1) + "˚c";

} 

else if (checkiff.checked)
{
    temp = temp  * 9 / 5 + 32;
    result.value = temp.toFixed(1) + "˚f"

} 
}
};