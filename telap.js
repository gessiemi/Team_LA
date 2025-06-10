function entrar() {
  window.location.href = "planos.html";
};
const frases = [
  "PROTOCOLO DE TREINOS PERSONALIZADOS",
  "DIETA PERSONALIZADA CONFORME SUA ROTINA E OBJETIVO",
  "SUPORTE VIA WHATSAPP"
];

const paragrafos = [
  "  É aqui que assumo a missão de elaborar seu treinamento personalizado, focado totalmente nos seus objetivos! ✓",
  "  Tem a importante tarefa de calcular minuciosamente sua dieta, levando em conta o seu gasto calórico durante os treinos. Distribui estrategicamente os macronutrientes e micronutrientes ao longo do dia. ✓",
  "  Oferecemos suporte e orientação todos os dias da semana, garantindo que você nunca se sinta perdido em seu planejamento. Estamos sempre disponíveis para esclarecer dúvidas sobre treinos ou dietas, proporcionando o acompanhamento necessário em todos os momentos. ✓"
];

let indice = 0;

const navegar = document.getElementById("frase");
const navegarp = document.getElementById("paragrafo");
const anteriorBtn = document.getElementById("anterior");
const proximoBtn = document.getElementById("proximo");

function transicao(elemento, texto) {
  elemento.classList.remove("esconder");
  elemento.classList.add("mostrar");

  setTimeout(() => {
    elemento.textContent = texto;
    elemento.classList.remove("esconder");
    elemento.classList.add("mostrar");
  }, 300)
};

function atualizar() {
  transicao(navegar, frases[indice]);
  transicao(navegarp, paragrafos[indice]);

  anteriorBtn.disabled = indice === 0;
  proximoBtn.disabled = indice === frases.length - 1;
}

proximoBtn.addEventListener("click", () => {
  if (indice < frases.length - 1) {
    indice++;
    atualizar();
  }
});
anteriorBtn.addEventListener("click", () => {
  if (indice > 0) {
    indice--;
    atualizar();
  }
});
navegar.classList.add("mostrar");
navegarp.classList.add("mostrar");
atualizar();





