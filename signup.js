function handleCadastroSubmit(event) {
    event.preventDefault(); 
  
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var senha = document.getElementById('senha').value;
  
    var usuario = {
      nome: nome,
      email: email,
      senha: senha
    };
  
    localStorage.setItem('usuario', JSON.stringify(usuario));
  
    alert('Cadastro realizado com sucesso!');
  }
  
  