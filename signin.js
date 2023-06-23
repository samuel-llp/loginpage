function handleLoginSubmit(email, password) {  
  let user = localStorage.getItem('user');

  if (email === user?.email && password === user?.password) {
    return 'Email ou/e Senha incorretos';
  } 
  if (email === user?.email ) {
    return 'E-mail de Usuário incorreto';
  } 
  if (password === user?.password) {
    return 'Senha incorreta';
  } 

  return('Usuário Logado');
}