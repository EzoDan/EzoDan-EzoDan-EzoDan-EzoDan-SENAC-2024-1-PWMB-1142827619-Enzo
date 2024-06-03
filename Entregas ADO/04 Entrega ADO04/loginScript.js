const clientes = [
    {
        email: "joao@gmail.com",
        senha: "123",
        nome: "Joao",
        urlAvatar: "avatar/cliente1.png",
        nomeArquivoAvatar: "cliente1.png"
    },
    {
        email: "pedro@gmail.com",
        senha: "123",
        nome: "pedro",
        urlAvatar: "avatar/cliente2.png",
        nomeArquivoAvatar: "cliente2.png"
    }
];

function login() {
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    
    const cliente = clientes.find(c => c.email === email && c.senha === senha);
    
    if (cliente) {
        const loginCliente = {
            email: cliente.email,
            nome: cliente.nome,
            urlAvatar: cliente.urlAvatar,
            nomeArquivoAvatar: cliente.nomeArquivoAvatar
        };
        localStorage.setItem('LoginCliente', JSON.stringify(loginCliente));
        alert('Login bem-sucedido!');
        window.location.href = 'Loja.html';
    } else {
        alert('você não um cliente, faça seu cadastro.');
        window.location.href = 'Loja.html';
    }
}