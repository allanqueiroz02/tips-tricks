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

const btnVibration = document.querySelector("#btn-vibration");
if (btnVibration) {
  btnVibration.addEventListener("click", () => {
    window.navigator.vibrate(200);
  });
}

const btnShare = document.querySelector("#btn-share");
const can = window.navigator.canShare();
console.log('>CAN', can);
if (btnShare && navigator.share) {
  btnShare.addEventListener("click", () => {
    navigator
      .share({
        title: "WEB API SHARE TESTE",
        text: "Um teste de utilização da API WEB SHARE",
        url: "https://www.google.com",
      })
      .then(() => console.log("Compartilhou com sucesso"))
      .catch((err) => console.log("Vixe, deu algum B.O.", err));
  });
}
