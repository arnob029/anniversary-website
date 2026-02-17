document.addEventListener("DOMContentLoaded", function () {

  // ================= FIRST PAGE =================

  const emojiContainer = document.querySelector('.emoji-container');
  const balloonContainer = document.querySelector('.balloon-container');
  const popupMessage = document.getElementById('popupMessage');
  const clickMeBtn = document.getElementById("clickMe");

  if (emojiContainer) {
    setInterval(() => {
      const emoji = document.createElement('div');
      emoji.className = 'emoji';
      emoji.innerText = '❤️';
      emoji.style.left = Math.random() * 100 + 'vw';
      emoji.style.animationDuration = 4 + Math.random() * 4 + 's';
      emojiContainer.appendChild(emoji);
      setTimeout(() => emoji.remove(), 8000);
    }, 500);
  }

  if (balloonContainer) {
    setInterval(() => {
      const balloon = document.createElement('div');
      balloon.className = 'balloon';
      balloon.innerText = '🎈';
      balloon.style.left = Math.random() * 100 + 'vw';
      balloon.style.animationDuration = 6 + Math.random() * 4 + 's';
      balloonContainer.appendChild(balloon);
      setTimeout(() => balloon.remove(), 10000);
    }, 700);
  }

  if (popupMessage) {
    setTimeout(() => popupMessage.style.display = 'block', 5000);
  }

  if (clickMeBtn) {
    setTimeout(() => clickMeBtn.style.display = 'block', 12000);
  }

  // ===== ROSE BLAST =====

  function launchRoseBlast(x, y) {
    const petalContainer = document.querySelector('.petal-container');
    if (!petalContainer) return;

    for (let i = 0; i < 350; i++) {
      const petal = document.createElement('div');
      petal.className = 'petal';
      petal.innerText = '🌹';

      petal.style.position = 'absolute';
      petal.style.left = x + 'px';
      petal.style.top = y + 'px';

      petal.style.setProperty('--x', Math.random() * 2 - 1);
      petal.style.setProperty('--y', Math.random() * 2 - 1);
      petal.style.animationDuration = (2 + Math.random() * 2) + 's';

      petalContainer.appendChild(petal);
      setTimeout(() => petal.remove(), 4500);
    }
  }

  const arnob = document.querySelector('.arnob-rail');
  const adrita = document.querySelector('.adrita-rail');

  if (arnob && adrita) {

    setTimeout(() => {
      arnob.style.opacity = 1;
      adrita.style.opacity = 1;
    }, 100);

    setTimeout(() => {

      const aRect = arnob.getBoundingClientRect();
      const dRect = adrita.getBoundingClientRect();

      const blastX = (aRect.left + dRect.right) / 2;
      const blastY = aRect.top + aRect.height / 2;

      launchRoseBlast(blastX, blastY);

      arnob.classList.add('dissolve');
      adrita.classList.add('dissolve');

    }, 5200);
  }

  // ================= SECOND PAGE =================

  const secondPage = document.getElementById("secondPage");

  const firstPageElements = document.querySelectorAll(
    ".cross-rail, .emoji-container, .balloon-container, .love-box, .anniversary-text, .click-me, .petal-container"
  );

  if (clickMeBtn && secondPage) {
    clickMeBtn.addEventListener("click", () => {
      firstPageElements.forEach(el => el.style.display = "none");
      secondPage.style.display = "flex";

      if (music) {
        music.muted = false;
        music.currentTime = 0;
        music.play().catch(() => {});
      }
    });
  }

  // ===== FLOATING LOVE =====

  const loveContainer = document.querySelector(".love-container");

  if (loveContainer) {
    function createLove() {
      const love = document.createElement("span");
      const hearts = ["❤️","💖","💘","💕","💞"];
      love.innerHTML = hearts[Math.floor(Math.random() * hearts.length)];
      love.style.left = Math.random() * 100 + "vw";
      love.style.fontSize = (Math.random() * 20 + 15) + "px";
      love.style.animationDuration = (Math.random() * 5 + 6) + "s";
      loveContainer.appendChild(love);
      setTimeout(() => love.remove(), 10000);
    }

    setInterval(createLove, 250);
  }

  // ===== LOVE LETTER =====

  const loveCard = document.getElementById("loveCard");
  const typedText = document.getElementById("typedText");

  const message = `Hi My love ❤️
HAPPY ANNIVERSARY 🫶
First of all I love you sonamoni 😘
Amr bow hoiya 1 bochor sojjho korco amake...
Aro bohu bochor sojjho korte hobe tumar jamai ke...
Samne sundor din gulor jonno wait koro...
R lastly tumar jamair moto valobasho 😁💕
Forever & always.`;

  let index = 0;

  function typeEffect() {
    if (typedText && index < message.length) {
      typedText.innerHTML += message.charAt(index);
      index++;
      setTimeout(typeEffect, 90);
    }
  }

  if (loveCard && typedText) {
    loveCard.addEventListener("click", function () {
      if (!loveCard.classList.contains("open")) {
        loveCard.classList.add("open");
        typedText.innerHTML = "";
        index = 0;
        typeEffect();
      } else {
        loveCard.classList.remove("open");
        setTimeout(() => {
          typedText.innerHTML = "";
          index = 0;
        }, 800);
      }
    });
  }

  // ================= 3RD PAGE =================

  const toThirdPageBtn = document.getElementById("toThirdPage");
  const thirdPage = document.getElementById("thirdPage");
  const music = document.getElementById("bgMusic");

  if (toThirdPageBtn && secondPage && thirdPage) {
    toThirdPageBtn.addEventListener("click", () => {

      secondPage.style.display = "none";
      thirdPage.style.display = "flex";

      startPetals();
      startSlideshow();

      if (music) {
        music.muted = false;
        music.currentTime = 0;
        music.play().catch(() => {});
      }

    });
  }

  // ===== POLAROID STACK SLIDESHOW =====
  const memoryImgs = Array.from(document.querySelectorAll(".memory-img"));
  const totalImgs = memoryImgs.length;

  // সব ছবি stack করে রাখো
  memoryImgs.forEach((img, i) => {
  // Polaroid wrapper
  const wrapper = document.createElement("div");
  wrapper.style.position = "absolute";
  wrapper.style.top = "0";
  wrapper.style.left = "0";
  wrapper.style.width = "100%";
  wrapper.style.height = "100%";
  wrapper.style.background = "white";
  wrapper.style.padding = "10px 10px 35px 10px";
  wrapper.style.boxSizing = "border-box";
  wrapper.style.boxShadow = "0 4px 15px rgba(0,0,0,0.25)";
  wrapper.style.borderRadius = "3px";
  wrapper.style.zIndex = totalImgs - i;
  wrapper.style.transition = "none";

  // হালকা rotation
  const angle = (i % 2 === 0 ? 1 : -1) * (i * 3);
  wrapper.style.transform = `rotate(${angle}deg)`;

  // img style reset
  img.style.width = "100%";
  img.style.height = "100%";
  img.style.objectFit = "cover";
  img.style.display = "block";
  img.style.borderRadius = "2px";
  img.style.boxShadow = "none";
  img.style.position = "relative";
  img.style.top = "auto";
  img.style.left = "auto";

  // wrapper এ img ঢোকাও
  img.parentNode.insertBefore(wrapper, img);
  wrapper.appendChild(img);

  // memoryImgs array তে wrapper রাখো
  memoryImgs[i] = wrapper;
});

  function startSlideshow() {
  const top = memoryImgs[0];

  // উপরে slowly উড়িয়ে দাও
  top.style.transition = "transform 1.2s cubic-bezier(0.4, 0, 0.2, 1), opacity 1.2s ease";
  top.style.transform = "translateY(-120%)";
  top.style.opacity = "0";

  setTimeout(() => {
    // নিচে থেকে চুপচাপ stack এর পেছনে রাখো
    top.style.transition = "none";
    top.style.transform = "translateY(0)";
    top.style.opacity = "1";
    top.style.zIndex = "0";

    memoryImgs.forEach(img => {
      img.style.zIndex = parseInt(img.style.zIndex) + 1;
    });

    memoryImgs.push(memoryImgs.shift());

    setTimeout(startSlideshow, 2500);
  }, 1300);
}

});


// ================= PETALS =================

let petalInterval;
const thirdPage = document.getElementById("thirdPage");

function startPetals() {
  petalInterval = setInterval(createPetal, 300);
}

function createPetal() {
  const petal = document.createElement("div");
  petal.classList.add("falling-petal");
  petal.innerHTML = "🌹";

  petal.style.left = Math.random() * (thirdPage ? thirdPage.offsetWidth : window.innerWidth) + "px";
  petal.style.fontSize = (15 + Math.random() * 25) + "px";
  petal.style.animationDuration = (4 + Math.random() * 4) + "s";

  if (thirdPage) thirdPage.appendChild(petal);

  setTimeout(() => {
    petal.remove();
  }, 8000);
}


// ================= MEMORY TEXT TYPING =================

const sentences = [
  "Welcome to our <br>365 day <br> celebration",
  "It is just<br>the beginning...",
  "OUR CAPTURED<br>MEMORIES",
  "More Memories<br>loading.........",
  "I love you Madam Ji❤️"
];

const memoryText = document.getElementById("memoryText");

let sentenceIndex = 0;
let charIndex = 0;

function typeSentence() {
  if (!memoryText) return;

  const currentSentence = sentences[sentenceIndex];
  memoryText.innerHTML = currentSentence.slice(0, charIndex + 1);
  charIndex++;

  if (charIndex < currentSentence.length) {
    setTimeout(typeSentence, 60);
  } else {
    setTimeout(() => {
      sentenceIndex = (sentenceIndex + 1) % sentences.length;
      charIndex = 0;
      typeSentence();
    }, 1200);
  }
}

typeSentence();


// ================= PAGE NAVIGATION =================

const clickMe = document.getElementById("clickMe");
const secondPage = document.getElementById("secondPage");
const toThirdPage = document.getElementById("toThirdPage");

/* First → Second */
if (clickMe) {
  clickMe.addEventListener("click", () => {
    if (secondPage) secondPage.classList.add("show-page");
  });
}

/* Second → Third */
if (toThirdPage) {
  toThirdPage.addEventListener("click", () => {
    if (secondPage) secondPage.classList.remove("show-page");
    const tp = document.getElementById("thirdPage");
    if (tp) tp.classList.add("show-page");
  });
}

/* 2nd page → 1st page */
const toFirstPage = document.getElementById("toFirstPage");
if (toFirstPage) {
  toFirstPage.addEventListener("click", () => {
    secondPage.style.display = "none";
    secondPage.classList.remove("show-page");

    document.querySelector(".emoji-container").style.display = "";
    document.querySelector(".balloon-container").style.display = "";
    document.querySelector(".love-box").style.display = "";
    document.querySelector(".anniversary-text").style.display = "";
    document.querySelector(".click-me").style.display = "block";
    document.querySelector(".petal-container").style.display = "";
  });
}

/* 3rd page → 2nd page */
const toSecondPage = document.getElementById("toSecondPage");
const music = document.getElementById("bgMusic");
if (toSecondPage) {
  toSecondPage.addEventListener("click", () => {
    const tp = document.getElementById("thirdPage");
    if (tp) {
      tp.style.display = "none";
      tp.classList.remove("show-page");
    }
    if (secondPage) {
      secondPage.style.display = "flex";
      secondPage.classList.add("show-page");
    }
    if (music) {
      music.pause();
    }
  });
}