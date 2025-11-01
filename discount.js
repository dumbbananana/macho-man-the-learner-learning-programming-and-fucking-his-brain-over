let password =  [];
let result = "";
let suppa = "";
let supply;

let helo = true;
while(helo){


    let username = prompt("enter a username", "");
    let password1 = prompt("enter passowrd", "");
let finalnum = "";
let symbols = "!@#$%^&";
let numbers = "123456789";
finalnum += symbols;
finalnum += numbers;
let password11 = password1.length;
for(i = 0; i <  password11; i ++){
    
    result = Math.floor(Math.random() * 10)
     suppa += finalnum[result];
     supply = username + `-` + suppa;
     
    
     helo = false;
}
console.log(suppa)
console.log(result)
password.push(supply)
console.log(password);
console.log(password1);
}


