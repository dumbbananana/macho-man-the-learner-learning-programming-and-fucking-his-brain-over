let inn = prompt("do you want to include number ?" ,"");
if( inn == "yes"){
     inn = true;
}else{
    inn = false;
}

let il = prompt("do you want to include letters ?" ,"");
if( il == "yes"){
     il = true;
}else{
    il = false;
}

let is = prompt("do you want to include letters ?" ,"");
if( is == "yes"){
     is = true;
}else{
    is = false;
}

let leng = prompt("what is the length of your password ?" ,"");
if(leng <5 ){
    alert("numbers less tahn 5 is not allowed");
} else {

let includenums = inn;
let includeletters = il;
let includesymbols = is;
let alength = leng;
let password = "";

alert(inn)
alert(il)
alert(is)
alert(leng)

function generatepassword(includenums, includeletters,   includesymbols, alength ){
    
     let allowednums = "12345";
     let allowedletters = "abcde";
      let allowedsymbols = "!@#$%";

        let whatall = ""; 
        
      whatall += includenums ? allowednums :  "";
      whatall += includeletters ? allowedletters :  "";
      whatall += includesymbols ? allowedsymbols :  "";
     
      
     

      for(let i = 0; i < alength ; i++){
        let index = Math.floor(Math.random() * whatall.length);
        password += whatall[index];

       
      
      }
      
      console.log(password)
}


 password = generatepassword(includenums, includeletters, includesymbols, alength );



}