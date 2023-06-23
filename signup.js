function formEvent(e) { 
  e.preventDefault();

  const alertMessage = handleSignupSubmit(
    document.getElementById('name').value,
    document.getElementById('email').value,
    document.getElementById('password').value
  )
  return alert(alertMessage)
}

function handleSignupSubmit(name, email, password) {
  let user = {
    name,
    email,
    password
  };

  localStorage.setItem('user', JSON.stringify(user));

  return 'Cadastro realizado com sucesso!'
}