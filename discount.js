let username=prompt("enter your username", "");
yesno=prompt("do you want to make it more profelssional", "");
if(yesno == "yes"){
     usernamet=username.trim().slice(0,1).toUpperCase() + username.slice(1).toLowerCase();

     alert(usernamet)
    alert(`your username is ${username}`);
} 

  else{
      alert(`your username is ${username}`);
}