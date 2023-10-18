window.onload = function () {
  console.log("Todos os recursos foram carregados!");
};

//#4
const arrayNumeros = [5, 51, 2, 26, 6, 1, 20];
const arrFormatado = arrayNumeros.sort();
const arrFormatadoCorretamente = arrayNumeros.sort((a, b) => a - b);

const arr1 = document.querySelector("#arr-1");
if (arr1)
  arr1.innerHTML = `
Original: [${arrayNumeros}]
Formatado-errado: [${arrFormatado}]
Formatado-certo: [${arrFormatadoCorretamente}]`;

//#5
const btnVibration = document.querySelector("#btn-vibration");
if (btnVibration) {
  btnVibration.addEventListener("click", () => {
    window.navigator.vibrate(200);
  });
}

//#6
// const btnShare = document.querySelector("#btn-share");
// const can = window.navigator.canShare();
// if (btnShare && navigator.share) {
//   btnShare.addEventListener("click", () => {
//     navigator
//       .share({
//         title: "WEB API SHARE TESTE",
//         text: "Um teste de utilização da API WEB SHARE",
//         url: "https://www.google.com",
//       })
//       .then(() => console.log("Compartilhou com sucesso"))
//       .catch((err) => console.log("Vixe, deu algum B.O.", err));
//   });
// }

//#7
const listOfFruits = ["Banana", "Laranja", "Uva", "Limão"];
const btnRandomFruit = document.querySelector("#btn-random-fruit");
const showRandomFruit = document.querySelector("#show-random-fruit");

if (btnRandomFruit) {
  btnRandomFruit.addEventListener("click", () => {
    const getRandomItem =
      listOfFruits[Math.floor(Math.random() * listOfFruits.length)];
    if (showRandomFruit) showRandomFruit.innerHTML = getRandomItem;
  });
}

// #13
function loadFile(event: any) {
  const image = document.getElementById("output") as HTMLImageElement;
  if (event.target) image.src = URL.createObjectURL(event.target.files[0]);
}

// #13 com filereader
function previewImage() {
  const fileReader = new FileReader();
  const inputImg = document.getElementById(
    "input-file-fileReader"
  ) as HTMLInputElement;
  const imageFileReader = document.getElementById(
    "img-fileReader"
  ) as HTMLImageElement;

  if (inputImg.files) {
    fileReader.readAsDataURL(inputImg.files[0]);
    fileReader.onload = function (fileReaderEvent) {
      if (typeof fileReaderEvent.target?.result === "string")
        imageFileReader.src = fileReaderEvent.target?.result;
    };
  }
}

// smooth scroll
// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//   anchor.addEventListener('click', function (e) {
//       e.preventDefault();

//       document.querySelector(this.getAttribute('href')).scrollIntoView({
//           behavior: 'smooth'
//       });
//   });
// });
