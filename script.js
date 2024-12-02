document.getElementById('form-contato').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário para o servidor
  
    // Obtém os valores dos campos
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;
  
    // Validação simples
    if (nome && email && mensagem) {
      alert('Mensagem enviada com sucesso!');
      document.getElementById('form-contato').reset(); // Limpa o formulário
    } else {
      alert('Por favor, preencha todos os campos!');
    }
  });
  