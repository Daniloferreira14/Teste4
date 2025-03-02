function toggleAnswer() {
    const answer = document.getElementById('answer');
    answer.style.display = (answer.style.display === 'none' || answer.style.display === '') ? 'block' : 'none';
  }

  document.addEventListener("DOMContentLoaded", () => {
    let audio = document.getElementById("bacgod-audio");
    let button = document.getElementById("play-button");

    button.addEventListener("click", () => {
      if (audio.paused) {
        audio.play();
        button.classList.add("playing");
        button.textContent = "🔊 Tocando...";
      } else {
        audio.pause();
        button.classList.remove("playing");
        button.textContent = "🎵 Tocar Música";
      }
    });

    // Espera o carregamento do DOM para garantir que os botões existam
    setTimeout(() => {
      // Seleciona todos os botões dentro da classe "rifa-item"
      let botoes = document.querySelectorAll(".rifa-item button");

      // Links das páginas que ainda serão criadas
      let urls = [
        "Primeiroindex/1pagina.html",
        "Segundaindex/2pagina.html",
        "Terceiroindex/3pagina.html",
        "Quartaindex/4pagina.html",
        "Quintaindex/smpagina.html",
        "6pri.html",
        "7pri.html",
        "8pri.html",
        "9pri.html",
        "10pri.html",
        "11pri.html",
        "12pri.html",
        "13pri.html",
        "14pri.html",
        "15pri.html",
        "16pri.html",
        "17pri.html",
        "18pri.html",
        "19pri.html"
      ];

      // Adiciona evento de clique para cada botão
      botoes.forEach((botao, index) => {
        botao.addEventListener("click", () => {
          if (urls[index]) {
            window.location.href = urls[index]; // Redireciona para a URL correspondente
          } else {
            console.log("URL não definida para o índice " + index);
          }
        });
      });
    }, 500); // Aguarda 500ms antes de adicionar os eventos
  });