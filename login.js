function handleLoginSubmit(event) {
    event.preventDefault();
  
    var email = document.getElementById('email').value;
    var senha = document.getElementById('senha').value;
  
    var storedEmail = localStorage.getItem('email');
    var storedSenha = localStorage.getItem('senha');
  
    if (email === storedEmail && senha === storedSenha) {
      alert('Usuário logado');
    } else {
      alert('Usuário não logado');
    }
  }
  