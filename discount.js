const balanceleft = [];
let transaction = [];
let ask1;
let balance = 10000;

let ask = prompt("how much do you want to transfer ?", "");

ask1 = Number(ask)
transaction.push(ask1);
balanceleft.push((balance - transaction))
console.log(transaction)
console.log(balanceleft)

