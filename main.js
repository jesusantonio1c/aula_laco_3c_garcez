function verificarTime() {
  
  var continuarPerguntando = true;

  while (continuarPerguntando) {
    
    var respostaTime = prompt("De que pais o Jesus é?");

    
    if (respostaTime.toLowerCase() === "Venezuela") {
      alert("aaaaaaaaacertou!");
      continuarPerguntando = false; // Sai do loop após a resposta correta
    } else {
      alert("Não é isso! Tente novamente.");
    }
  }
}