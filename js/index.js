const inputTexto = document.querySelector(".input-user");
const mensaje = document.querySelector(".container-answer__textarea");

function btnencriptar() {
  const textEncriptado = encriptar(inputTexto.value);
  mensaje.value = textEncriptado;

}

function btndesencriptar() {
  const textDesencriptado = desencriptar(inputTexto.value);
  mensaje.value = textDesencriptado;

}

function encriptar(TextoParaEncriptar) {
  let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]
  TextoParaEncriptar = TextoParaEncriptar.toLowerCase();
  for (let i = 0; i < matrizCodigo.length; i++) {
    if (TextoParaEncriptar.includes(matrizCodigo[i][0])) {
      TextoParaEncriptar = TextoParaEncriptar.replaceAll(matrizCodigo[i][0],
        matrizCodigo[i][1])
    }
  }
  return TextoParaEncriptar;
}

function desencriptar(TextoParaDesencriptar) {
  let matrizCodigo = [["enter", "e"], ["imes", "i"], ["ai", "a"], ["ober", "o"], ["ufat", "u"]]
  TextoParaDesencriptar = TextoParaDesencriptar.toLowerCase();
  for (let i = 0; i < matrizCodigo.length; i++) {
    if (TextoParaDesencriptar.substring(matrizCodigo[i][0])) {
      TextoParaDesencriptar = TextoParaDesencriptar.replaceAll(matrizCodigo[i][0],
        matrizCodigo[i][1])
    }
  }
  return TextoParaDesencriptar;
}


