while( ask == "done"){

    let ask = prompt("what do you want", "");
    if(ask == null){
        alert("item entered");
        break;
    } else {
        ask = ask;
    }
    let ask1 = prompt("how many do you want ?", "");
     if(ask1 == null){
        alert("no digit enterrred");
        break;
    } else {
        ask1 = ask1;
    }
}

console.log(ask)
console.log(ask1)