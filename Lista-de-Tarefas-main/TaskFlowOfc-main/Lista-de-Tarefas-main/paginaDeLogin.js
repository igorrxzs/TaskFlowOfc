//redireciona para o recuperar senha
document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault(); 
});


document.getElementById("esqueciSenhaLink").addEventListener("click", function(event) {
  event.preventDefault();  
  window.location.href = "Recuperar Senha.html";  
});
//redireciona para cadastrar
document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault(); 
});


document.getElementById("cadastrarLink").addEventListener("click", function(event) {
  event.preventDefault();  
  window.location.href = "cadastro.html";  

});   