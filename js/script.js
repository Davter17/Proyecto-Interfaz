function toggleLogin() {
    var loginContainer = document.getElementById('login-container');
    var chatContainer = document.getElementById('chat-container');
  
  // Oculta el formulario de chat si está abierto
  chatContainer.style.display = 'none';

  // Muestra u oculta el formulario de inicio de sesión
  loginContainer.style.display = (loginContainer.style.display === 'none' || loginContainer.style.display === '') ? 'block' : 'none';
}

function login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // En este ejemplo, simplemente mostramos una alerta con los datos ingresados.
    alert('Username: ' + username + '\nPassword: ' + password);
}

function toggleChat() {
  var loginContainer = document.getElementById('login-container');
  var chatContainer = document.getElementById('chat-container');
  
  // Oculta el formulario de inicio de sesión si está abierto
  loginContainer.style.display = 'none';

  // Muestra u oculta el formulario de chat
  chatContainer.style.display = (chatContainer.style.display === 'none' || chatContainer.style.display === '') ? 'block' : 'none';
}