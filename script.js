let startButton = document.getElementById("start-button");
let scaryWindow = document.getElementById("scary-window");
let errorSound = document.getElementById("error-sound");
let screamSound = document.getElementById("scream-sound");

let errorCount = 0;

// Функция запуска сайта в полноэкранном режиме
function openFullScreen() {
  if (document.documentElement.requestFullscreen) {
    document.documentElement.requestFullscreen();
  } else if (document.documentElement.mozRequestFullScreen) { // Firefox
    document.documentElement.mozRequestFullScreen();
  } else if (document.documentElement.webkitRequestFullscreen) { // Chrome и Safari
    document.documentElement.webkitRequestFullscreen();
  } else if (document.documentElement.msRequestFullscreen) { // IE/Edge
    document.documentElement.msRequestFullscreen();
  }
}

openFullScreen(); // Автоматически открывает в полноэкранном режиме

startButton.addEventListener("click", function() {
  // Включаем звук ошибки
  errorSound.play();

  // Появляется страшное окно
  scaryWindow.style.display = "block";
  
  // Начинаем спаунить ошибки каждую миллисекунду
  setInterval(spawnError, 1);
});

function spawnError() {
  // Создаём изображение ошибки
  let errorImg = document.createElement("img");
  errorImg.src = "assets/error-img.png";  // Путь к изображению ошибки
  errorImg.classList.add("error-img");
  document.body.appendChild(errorImg);

  // Воспроизведение звука
  errorSound.play();

  // Увеличиваем счётчик ошибок
  errorCount++;

  // Если ошибок становится 1000, показываем скример
  if (errorCount >= 1000) {
    showScream();
  }
}

function showScream() {
  // Включаем звук скримера
  screamSound.play();

  // Создаём скример
  let screamImg = document.createElement("img");
  screamImg.src = "assets/scream-img.png";  // Путь к изображению скримера
  screamImg.classList.add("scream-img");
  document.body.appendChild(screamImg);

  // Закрытие сайта через 2 секунды
  setTimeout(function() {
    window.close();  // Закрытие вкладки
  }, 2000);  // 2 секунды задержки
}

function closeWindow() {
  // Закрыть окно при клике на крестик
  scaryWindow.style.display = "none";
  errorSound.pause();
}

