let a = prompt("what do you want ?" , "");

 a = ["10000" , "20000" , "30000" , "40000"];

let max = Math.max(...a);
let min = Math.min(...a);
alert(` the highest price for this item isn ${max} rs`);
alert(` the lowest price for this item isn ${min} rs`);

let sum = 0;
for(let i = 0; i <a.length ; i++){
    sum = sum + Number(a[i]);
    
};
alert(` the total market value of bid is ${sum} rs`)
let average = sum / a.length;
alert(` average amount  = ${average} rs`)
