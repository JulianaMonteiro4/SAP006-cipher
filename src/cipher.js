const cipher = {
  encode: function(valorFaixa, textoCaixa){
    let mensagemCifra = "";

    for(let i = 0; i < textoCaixa.length; i++) {
      let textCifra = textoCaixa.charCodeAt(i);
        if (textCifra >= 65 && textCifra <= 90) {
          mensagemCifra += String.fromCharCode((textCifra - 65 + valorFaixa) %26 + 65);
        } else if(textCifra >= 97 && textCifra <= 122) {
          mensagemCifra += String.fromCharCode((textCifra - 97 + valorFaixa) %26 + 97);
        } else if (textCifra >= 32 && textCifra <=64 || textCifra >= 91 && textCifra <= 96 || textCifra >= 128 && textCifra <= 237) {
          mensagemCifra += textoCaixa.charAt(i);
        }
    }
    return mensagemCifra;
  
  }
,
  decode: function (valorFaixa, textoCaixa){
    let mensagemDecifra = "";

    for(let i = 0; i < textoCaixa.length; i++) {
      let textDecifra = textoCaixa.charCodeAt(i);
        if (textDecifra >= 65 && textDecifra <= 90) {
          mensagemDecifra += String.fromCharCode((textDecifra - 90 - valorFaixa) %26 + 90);
        } else if (textDecifra >= 97 && textDecifra <= 122) {
          mensagemDecifra += String.fromCharCode((textDecifra - 122 - valorFaixa) %26 + 122);
        } else if (textDecifra >= 32 && textDecifra <=64 || textDecifra >= 91 && textDecifra <= 96 || textDecifra >= 128 && textDecifra <= 237) {
          mensagemDecifra += textoCaixa.charAt(i);
        }
    }
    return mensagemDecifra;
  }
}






export default cipher;
