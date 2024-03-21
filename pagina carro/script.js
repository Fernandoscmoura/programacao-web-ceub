const urlParams = new URLSearchParams(window.location.search);
const cor = urlParams.get('cor');
const modelo = urlParams.get('modelo');
const ano = urlParams.get('ano');

document.getElementById('escolha-cor').textContent = cor;
document.getElementById('escolha-modelo').textContent = modelo;
document.getElementById('escolha-ano').textContent = ano;


let imagemDoCarro;
if (modelo === "Sedan") {
    if (cor === "vermelho") {
        imagemDoCarro = "civicvermelho.jpg"; 
    } else if (cor === "azul") {
        imagemDoCarro = "civicazul.jpg"; 
    } else if (cor === "verde") {
        imagemDoCarro = "civicverde.jpg"; 
    }
} else if (modelo === "SUV") {
    if (cor === "vermelho") {
        imagemDoCarro = "suvvermelho.jpg"; 
    } else if (cor === "azul") {
        imagemDoCarro = "suvazul.jpg"; 
    } else if (cor === "verde") {
        imagemDoCarro = "suvverde.jpg"; 
    }
} else if (modelo === "hatchback") {
    if (cor === "vermelho") {
        imagemDoCarro = "hatchvermelho.jpg"; 
    } else if (cor === "azul") {
        imagemDoCarro = "hatchazul.jpg"; 
    } else if (cor === "verde") {
        imagemDoCarro = "hatchverde.jpg"; 
    }
} 



document.getElementById('carro-imagem').src = imagemDoCarro;


