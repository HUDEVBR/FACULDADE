document.getElementById("cadastroForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio do formulário

    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var senha = document.getElementById("senha").value;
    var confirmarSenha = document.getElementById("confirmarSenha").value;
    var erroDiv = document.getElementById("erro");

    // Limpar mensagens de erro anteriores
    erroDiv.textContent = "";

    // Validação de campos obrigatórios
    if (!nome || !email || !senha || !confirmarSenha) {
        erroDiv.textContent = "Todos os campos são obrigatórios!";
        return;
    }

    // Validação de senha
    if (senha !== confirmarSenha) {
        erroDiv.textContent = "As senhas não coincidem!";
        return;
    }

    // Cadastro bem-sucedido
    alert("Cadastro realizado com sucesso!");

    // Limpar campos após o cadastro
    document.getElementById("cadastroForm").reset();
});