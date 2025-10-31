

let fruit = prompt("what is your fav food?", "")
let num = prompt("what is your fav num?", "")
let word = prompt("what is your fav word?", "")

let id = [fruit , num , word]

console.log(id);


id.forEach(call)

function call(element){
    console.log(element)
}