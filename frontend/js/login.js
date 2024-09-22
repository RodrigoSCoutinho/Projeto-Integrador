document.getElementById('loginForm').addEventListener('submit', async function(event) {
    event.preventDefault(); 

    const formData = {
        nome: document.getElementById('nome').value,
        senha: document.getElementById('senha').value
    };

    // Enviando dados para o backend via fetch API
    try {
        const response = await fetch('http://localhost:8081/api/v1/usuarios', { 
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        if (response.ok) {
            const data = await response.json(); 
            localStorage.setItem('token', data.token);
            alert('Autenticação bem-sucedida!');
            window.location.href = '/dashboard';
        } else {
            const errorText = await response.text(); 
            alert(`Erro ao autenticar: ${errorText}`);
        }
        
    } catch (error) {
        console.error('Erro:', error);
        alert('Erro ao autenticar, tente novamente.');
    }
});
