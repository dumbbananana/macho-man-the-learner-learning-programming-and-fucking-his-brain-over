let abc  = [];
let sagarmatha  = [];
let kanchangunga = [];
let final;

let given =false;
while(given == false){
    let age = prompt("what is your age ", "");
      age = Number(age)
    if( age >= 18){
        let name  = prompt("what is your name ", "");
        let where = prompt("where do you want to go", "");
        if ((name || where ) == ""){
            alert("hellow world")

        }  else{

           if(where == "abc"){
            let semi = name +`-`+ where ;
            
            abc.push(semi)
            
            given = true;
            
         
           }
        }


    }
}


console.log(abc)