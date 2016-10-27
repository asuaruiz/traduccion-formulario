function traducir(){
	var singIn = document.getElementById ("form-signin-heading");
	var inputEmail = document.getElementById ("inputEmail");
	var inputPassword = document.getElementById ("inputPassword");
	var rememberMe = document.querySelector ("span");
	var button = document.querySelector("button");

	button.textContent = "Iniciar Sesion"
	rememberMe.textContent = "Recordar datos";
	singIn.textContent = "Por favor inicia sesion";
	inputEmail.placeholder = "Correo Electronico";
	inputPassword.placeholder ="Contraseña";
} 
traducir();