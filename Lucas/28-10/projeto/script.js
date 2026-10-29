// Localiza os dois elementos da página.
const botao = document.getElementById("botaoAjuda");
const aviso = document.getElementById("aviso");
 
// Declara a ação a realizar.
function mostrarAjuda() {
    aviso.textContent = "Você pode ser voluntário!";
}

// Executa a função a cada clique.
botao.addEventListener("click", mostrarAjuda);