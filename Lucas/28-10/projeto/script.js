// Localiza o local de exibição da mensagem.
const situacao = document.getElementById("situacao");
const vagas = 2;

// Exibe somente uma das mensagens no HTML.
if (vagas > 0) {
    situacao.textContent = "Ainda temos vagas!";
} else {
    situacao.textContent = "Inscrições encerradas.";
}