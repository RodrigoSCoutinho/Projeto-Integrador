document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o comportamento padrão do formulário (recarregar a página)

    const login = document.getElementById('username').value;
    const senha = document.getElementById('password').value;

    fetch('http://localhost:8080/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            login: login,
            senha: senha
        })
    })
    .then(response => response.json()) // Espera uma resposta JSON do servidor
    .then(data => {
        // Mensagem de sucesso ou redirecionamento
        alert('Login bem-sucedido!'); 
        window.location.href = '/home'; // Redireciona para a página inicial após o login
    })
    .catch(error => {
        console.error('Erro:', error);
        alert('Ocorreu um erro ao tentar fazer login.');
    });
});
