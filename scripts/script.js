function trocarLetrasCriptografar(texto) {
  let textoTrocado = "";
  let caracteres = { e: "enter", i: "imes", a: "ai", o: "ober", u: "ufat" };

  for (let i = 0; i < texto.length; i++) {
    if (caracteres[texto[i]]) {
      textoTrocado += caracteres[texto[i]];
    } else {
      textoTrocado += texto[i];
    }
  }

  return textoTrocado;
}

function criptografarTexto() {
  let entrada = document.getElementById("text-input");
  let textoResultado = document.getElementById("text-result");

  if (entrada.value.length > 0) {
    // Esconde o console com os conteúdos iniciais
    let divConsoleConteudo = document.getElementsByClassName(
      "container__section__output__console__content"
    );
    divConsoleConteudo[0].style.display = "none";

    // Exibe o console com os novos conteúdos do resultado
    let divResultado = document.getElementsByClassName(
      "container__section__output__console__result"
    );
    divResultado[0].style.display = "flex";

    // Adquire o texto através da entrada
    let texto = entrada.value;

    // Troca as letras para aplicar a criptografia
    textoResultado.innerHTML = trocarLetrasCriptografar(texto);
  }
}

function trocarLetrasDescriptografar(texto) {
  let caracteres = { enter: "e", imes: "i", ai: "a", ober: "o", ufat: "u" };

  for (let c in caracteres) {
    if (texto.includes(c)) {
      texto = texto.replaceAll(c, caracteres[c]);
    }
  }

  return texto;
}

function descriptografarTexto() {
  let entrada = document.getElementById("text-input");
  let textoResultado = document.getElementById("text-result");

  if (entrada.value.length > 0) {
    // Esconde o console com os conteúdos iniciais
    let divConsoleConteudo = document.getElementsByClassName(
      "container__section__output__console__content"
    );
    divConsoleConteudo[0].style.display = "none";

    // Exibe o console com os novos conteúdos do resultado
    let divResultado = document.getElementsByClassName(
      "container__section__output__console__result"
    );
    divResultado[0].style.display = "flex";

    // Adquire o texto através da entrada
    let texto = entrada.value;

    // Troca as letras para aplicar a criptografia
    textoResultado.innerHTML = trocarLetrasDescriptografar(texto);
  }
}

function copiarTexto() {
  var textoDiv = document.getElementById("text-result");

  navigator.clipboard.writeText(textoDiv.innerText);
}

function verificarEntrada(entrada) {
  const input = document.getElementById("text-input");
  input.value = input.value.replace(/[^a-z ]/g, '');
}
