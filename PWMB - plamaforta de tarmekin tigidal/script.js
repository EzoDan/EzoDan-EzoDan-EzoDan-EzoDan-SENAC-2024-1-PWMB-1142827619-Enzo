const btn = document.getElementById("button")
const btnLogin = document.getElementById("buttonLogin")

const usuarios = {
    nome: 'bee',
    senha: '123'
}; 


        
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
        window.location.href = 'index.html';
    }
}

let array = []


btn.addEventListener('click', (e) =>{
    e.preventDefault()
    let usuario = document.getElementById("username")
    let senha = document.getElementById("password")
    let dados = []

 
    dados.push(usuario.value)
    dados.push(senha.value)
    array.push(dados)

    usuario.value = ""
    senha.value = ""
    console.log(array)

    array.forEach((usuario, senha) =>{
        console.log(usuario)
        console.log(senha)
    }) 
})



// btnLogin.addEventListener('click', (e) =>{
//     e.preventDefault()
//     let usuarioLogin = document.getElementById("usernameLogin")
//     let senhaLogin = document.getElementById("passwordLogin")

//     array.forEach((usuario,  senha) =>{
//         if(usuarioLogin.value === usuario && senhaLogin.value == senha){
//             usuarioLogin.value = ""
//             senhaLogin.value = ""
//         }
//         console.log("INVALIDO")
//     }) 
// })

