document.getElementById("cadastroForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const senha = document.getElementById("senha").value;
    const confirmarSenha = document.getElementById("confirmarSenha").value;
    const erroSenha = document.getElementById("erroSenha");



        if (senha !== confirmarSenha) {
            erroSenha.textContent = "Senhas Diferentes";
        } else {
            erroSenha.textContent = "";
            alert("Cadastro realizado!");
        }});

