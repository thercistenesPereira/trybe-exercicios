const userEmail = 'maria@email.com';
function userInfo() {
    userEmail
  
    // Toda expressão dentro do escopo da função userInfo tem acesso à variável userEmail
    console.log(userEmail);
  }
  userInfo();