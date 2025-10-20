document.getElementById("btn").onclick = function(){
a1 = document.getElementById("num1").value ;
a2 = document.getElementById("operator").value ;
a3 = document.getElementById("num2").value ;

a11 = Number(a1);
a22 = Number(a3);

if (a2 == "+"){
  final1 = a11 + a22 ;
  document.getElementById("result1").textContent = `${final1}`;
}

if (a2 == "-"){
  final1 = a11 - a22 ;
  document.getElementById("result1").textContent = `${final1}`;
}

if (a2 == "*"){
  final1 = a11 * a22 ;
  document.getElementById("result1").textContent = `${final1}`;
}

if (a2 == "/"){
  final1 = a11 / a22 ;
  document.getElementById("result1").textContent = `${final1}`;
}

if (a2 == "%"){
  final1 = a11 % a22 ;
  document.getElementById("result1").textContent = `${final1}`;
}


}