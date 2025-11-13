var modal = document.getElementById("myModal");
var btn = document.getElementById("openModalBtn");
var span = document.getElementsByClassName("close")[0];


btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}


window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


var loginForm = document.getElementById("loginForm");


loginForm.onsubmit = function(event) {

    event.preventDefault(); 
  
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;


    console.log("Tentativa de login com:");
    console.log("Usuário:", username);
    console.log("Senha:", password);

    if (username === "admin" && password === "1234") {
        alert("Login bem-sucedido! Bem vindo");
        modal.style.display = "none"; 
        loginForm.reset();
    } else {
        alert("Usuário ou senha inválidos. Ta tentando invadir vagabundo?! ");
    }
}