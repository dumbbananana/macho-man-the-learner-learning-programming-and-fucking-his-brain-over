const id = "ashish";
const pass = "123@";
let = info = [];




document.getElementById("btn").onclick = function(){

    let givenuser = document.getElementById("username").value;
    let givenpassword = document.getElementById("password").value;
      console.log(givenuser);
      console.log(givenpassword)
      if((givenuser == id) || (givenpassword == pass)){
        console.log("done")
      } else{
        alert("wrong")
      }
      info.push(givenuser , givenpassword)
      console.log(info)
};
