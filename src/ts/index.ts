window.onload = function () {
  console.log("Todos os recursos terminaram o carregamento!");
};

const arrayNumeros = [5, 51, 2, 26, 6, 1, 20];
const arrFormatado = arrayNumeros.sort();
const arrFormatadoCorretamente = arrayNumeros.sort((a, b) => a - b);

const arr1 = document.querySelector("#arr-1");
if (arr1)
  arr1.innerHTML = `
Original: [${arrayNumeros}]
Formatado-errado: [${arrFormatado}]
Formatado-certo: [${arrFormatadoCorretamente}]`;
