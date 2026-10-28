// nome e destino são parâmetros da função.
function saudarVoluntario(nome, destino) {
    const paragrafo = document.getElementById(destino);
    paragrafo.textContent = "Obrigado, " + nome + "!";
}

saudarVoluntario("Ana", "saudacao1");

function saudarVoluntario2(visitante, local) {
    const paragrafo2 = document.getElementById(local);
    paragrafo2.textContent = visitante + ", seja bem vindo!"
}

saudarVoluntario2("Lucas", "saudacao2");