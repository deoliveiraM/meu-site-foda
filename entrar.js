function cadastrar(){
    var user, password;
    user = document.getElementById('cadastroUser').value;
    password = document.getElementById('cadastroPassword').value;
    localStorage.setItem('userSalvo', user);
    localStorage.setItem('passwordSalvo', password);
    alert('Usuário Cadastrado com Sucesso!');
}
function logar(){
    var user, password, userBanco, passwordBanco;
    user = document.getElementById('loginUser').value;
    password = document.getElementById('loginPassword').value;
    userBanco = localStorage.getItem('userSalvo')
    passwordBanco = localStorage.getItem('passwordSalvo')
    if(userBanco == user && passwordBanco == password){
        alert('Login Realizado com Sucesso')
        window.location.href = "index.html"
    }else{
        alert('Usuario ou Senha Incorreta')
    }
}