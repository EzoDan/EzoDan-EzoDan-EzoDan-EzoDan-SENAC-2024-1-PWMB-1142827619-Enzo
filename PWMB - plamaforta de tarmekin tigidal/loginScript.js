const usuarios = [
    {
    nome: 'bee',
    senha: '123'
    }
]; 

localStorage.setItem('usuarios', JSON.stringify(usuarios));


function login() {
    const nome = document.getElementById('username').value;
    const senha = document.getElementById('password').value;

    const cliente = usuarios.find(c => c.nome === nome && c.senha === senha)
    if (cliente) {
        const loginCliente = {
            nome: cliente.nome,
            senha: cliente.senha
        };
        localStorage.setItem('LoginCliente', JSON.stringify(loginCliente));
        alert('Login bem-sucedido!');
        window.location.href = 'graficos.html';
    }
    else {
        alert('você não um cliente, faça seu cadastro.');
        window.location.href = 'consulta.html';
    }
}