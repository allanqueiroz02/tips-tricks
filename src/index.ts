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
const listOfFruits = [
  "Banana",
  "Laranja",
  "Uva",
  "Limão",
  "Acerola",
  "Caju",
  "Abacaxi",
];
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

// 17
const openModalBtn = document.querySelector("[data-modal='abrir']");
const closeModalBtn = document.querySelector("[data-modal='fechar']");
const containerModal = document.querySelector(".container-modal");
const loginBtn = document.querySelector("#button-logar");

const userEvents = ["click", "touchstart"];

if (openModalBtn && closeModalBtn && containerModal) {
  userEvents.forEach((eventUser) => {
    openModalBtn.addEventListener(eventUser, () => {
      containerModal.classList.add("ativo");
    });

    closeModalBtn.addEventListener(eventUser, () => {
      containerModal.classList.remove("ativo");
    });

    containerModal.addEventListener(eventUser, function (event) {
      if (event.target === this) containerModal.classList.remove("ativo");
    });

    loginBtn?.addEventListener(eventUser, (event) => {
      event.preventDefault();
      console.log("Clicou em logar");
    });
  });

  //18
  let toTopButton = document.querySelector(
    "[data-button='to-top']"
  ) as HTMLElement;

  window.onscroll = function () {
    scrollToTop();
  };

  function scrollToTop() {
    if (document.documentElement.scrollTop > 1000)
      toTopButton.style.display = "block";
    else toTopButton.style.display = "none";
  }

  toTopButton.addEventListener("click", () => {
    document.body.scrollIntoView({ behavior: "smooth" });
  });
}

// 22
function getTimer() {
  const relogio = document.querySelector("#relogio") as HTMLElement;

  const hours = new Date().getHours();
  const frttedHours = hours.toString().length === 1 ? `0${hours}` : hours;

  const minutes = new Date().getMinutes();
  const frttedMinutes =
    minutes.toString().length === 1 ? `0${minutes}` : minutes;

  const seconds = new Date().getSeconds();
  const frttedSeconds =
    seconds.toString().length === 1 ? `0${seconds}` : seconds;

  if (relogio) {
    relogio.innerText = `${frttedHours}:${frttedMinutes}:${frttedSeconds}`;
  }
}

const showTimer = document.querySelector("[data-relogio='show']");
const hideTimer = document.querySelector("[data-relogio='hide']");
const timer = document.querySelector("#relogio");
let intervalTimer: number | undefined;

if (showTimer)
  showTimer.addEventListener("click", function () {
    timer?.classList.add("showTimer");
    intervalTimer = setInterval(getTimer, 1000);
  });

if (hideTimer)
  hideTimer.addEventListener("click", function () {
    timer?.classList.remove("showTimer");
    if (intervalTimer) clearInterval(intervalTimer);
  });

//23
const minInput = document.querySelector("#min-input") as HTMLInputElement;
const maxInput = document.querySelector("#max-input") as HTMLInputElement;
const qtdArray = document.querySelector(
  "#itens-from-array"
) as HTMLInputElement;
const generateButton = document.querySelector("#generate-numbers-array");
const showNumbers = document.querySelector("#show-numbers-array");

const formattedQtdNumber = +qtdArray.value;
let arrayNumbers: number[] = Array(formattedQtdNumber);

// numero max ñ pode ser menor que min

function generateRandomNumber() {
  const maxNumber = +maxInput.value;
  const minNumber = +minInput.value;

  if (maxNumber && minNumber)
    return Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;

  return "Os números não foram informados";
}

function alreadyHasNumber(arr: number[], number: number) {

}

function createArrayOfNumbers() {
  const randomNumber = generateRandomNumber();

  if (formattedQtdNumber && typeof randomNumber === "number") {
    if (!arrayNumbers.length && typeof randomNumber === "number")
      arrayNumbers.push(randomNumber);
    else {
      alreadyHasNumber(arrayNumbers, randomNumber);
    }
  }
}

generateButton?.addEventListener("click", function () {
  createArrayOfNumbers();
});
