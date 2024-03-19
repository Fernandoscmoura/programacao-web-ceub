const urlParams = new URLSearchParams(window.location.search);
const cor = urlParams.get('cor');
const modelo = urlParams.get('modelo');
const ano = urlParams.get('ano');

document.getElementById('escolha-cor').textContent = cor;
document.getElementById('escolha-modelo').textContent = modelo;
document.getElementById('escolha-ano').textContent = ano;

// Defina a imagem do carro com base na escolha do modelo
let imagemDoCarro;
if (modelo === "Sedan") {
    if (cor === "vermelho") {
        imagemDoCarro = "civicvermelho.jpg"; // Insira o caminho para a imagem do SUV vermelho
    } else if (cor === "azul") {
        imagemDoCarro = "civicazul.jpg"; // Insira o caminho para a imagem do SUV azul
    } else if (cor === "verde") {
        imagemDoCarro = "civicverde.jpg"; // Insira o caminho para a imagem do SUV verde
    }
} else if (modelo === "SUV") {
    if (cor === "vermelho") {
        imagemDoCarro = "suvvermelho.jpg"; // Insira o caminho para a imagem do SUV vermelho
    } else if (cor === "azul") {
        imagemDoCarro = "suvazul.jpg"; // Insira o caminho para a imagem do SUV azul
    } else if (cor === "verde") {
        imagemDoCarro = "suvverde.jpg"; // Insira o caminho para a imagem do SUV verde
    }
} else if (modelo === "hatchback") {
    if (cor === "vermelho") {
        imagemDoCarro = "hatchvermelho.jpg"; // Insira o caminho para a imagem do SUV vermelho
    } else if (cor === "azul") {
        imagemDoCarro = "hatchazul.jpg"; 
    } else if (cor === "verde") {
        imagemDoCarro = "hatchverde.jpg"; 
    }
} 



document.getElementById('carro-imagem').src = imagemDoCarro;


