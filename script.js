function armazenarValor() {
    // Pega o valor do input
    var userInput = document.getElementById("userInput").value;
    
    // Para juntar texto e variável no console, usamos o +
    console.log("o valor da variavel é " + userInput);
    
    // Corrigido o ID para "valorInserido" e o uso do +
    document.getElementById("valorInserido").innerText = " sua resposta é: " + userInput;

}
