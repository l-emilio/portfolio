console.log("Meu portfólio está interativo!");

const botaoMsg = document.querySelector("#btnMensagem");
const paragrafoMsg = document.querySelector("#mensagem");
const botaoFoto = document.querySelector("#btnMostrar");
const imagemPerfil = document.querySelector("#foto");
const tituloH1 = document.querySelector("#titulo-boas-vindas");

// Altera o título se ele existir
if (tituloH1) {
    tituloH1.textContent = "Meu Portfólio Interativo 🚀";
}

// Lógica da mensagem
botaoMsg.addEventListener("click", () => {
    paragrafoMsg.textContent = "Você clicou no botão!";
});

// Lógica da foto com efeito suave
botaoFoto.addEventListener("click", () => {
    if (imagemPerfil) {
        imagemPerfil.style.display = "block";
        
        requestAnimationFrame(() => {
            setTimeout(() => {
                imagemPerfil.style.opacity = "1";
            }, 50); 
        });
    }
});