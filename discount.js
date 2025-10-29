let nn = [];
let age  = [];


function hello(backatya){
    let ask = prompt('what si your name ?', "");
    console.log(ask);
    backatya();
   
    
    
}

function bye(){
   let ask2 = prompt('what is your ahe?', "");
   ask2 = Number(ask2);
   if(isNaN(ask2)){
    alert("not a number");
   } else{
    console.log(ask2);
   }

}

hello(bye);

nn.push(ask);
age.push(ask1);

