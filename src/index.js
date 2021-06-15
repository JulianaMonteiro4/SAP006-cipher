import cipher from './cipher.js';

const cifButton = document.getElementById("cifrarButton");
    function cifrarMessage () {
        let valorFaixa = Number(document.getElementById("rangeCifra").value);
        let textoCaixa = document.getElementById("textCifra").value;
        const cifrarButton = cipher.encode(valorFaixa, textoCaixa);
            document.getElementById("resultadoCifra").value = cifrarButton;        
    }
    cifButton.addEventListener("click", cifrarMessage);

const decButton = document.getElementById("decifrarButton");
    function decifrarMessage () {
        let valorFaixa = Number(document.getElementById("rangeDecifra").value);
        let textoCaixa = document.getElementById("textDecifra").value;
        const decifrarButton = cipher.decode(valorFaixa, textoCaixa);
            document.getElementById("resultadoDecifra").value = decifrarButton;
        
    }
    decButton.addEventListener("click", decifrarMessage);

console.log(cipher);