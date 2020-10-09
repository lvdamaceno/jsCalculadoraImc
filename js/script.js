function calculaIMC() {
  var peso = document.getElementById('inputPeso').value;
  var altura = document.getElementById('inputAltura').value;
  var alturaM = altura / 100;
  var imc = peso / alturaM ** 2;
  document.getElementById('indiceIMC').innerHTML =
    'Seu imc é ' + imc.toFixed(2);
  document.getElementById('classificacaoIMC').innerHTML =
    'Este índice é classificado como ' + '<strong>' + classificacao(imc);
}

function classificacao(imc) {
  if (imc <= 18.5) {
    return 'Magreza';
  }
  if (imc > 18.5 && imc <= 24.9) {
    return 'Normal';
  }
  if (imc > 25 && imc <= 29.9) {
    return 'Sobrepeso';
  }
  if (imc > 30 && imc <= 39.9) {
    return 'Obesidade';
  }
  if (imc > 40) {
    return 'Obesidade Grave';
  }
}
