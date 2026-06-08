/* ===============================
   QUICK EDIT SECTION
   Change these before sending.
================================== */
const CONFIG = {
  herName: "Epshitaa", // Example: "Ananya"
  yourName: "Vaibhav", // Example: "Rahul"
  yourWhatsAppNumber: "+917091059921", // Put your number with country code, no +, no spaces. Example: "916202545006"
  firstMessage: "I made this page because you are special to me.",
  whatsappText: "Yes, I saw your page 💗",
  noTexts: [
    "Are you sure? 🥺",
    "Think again, cutie 😭",
    "My heart is loading... 💔",
    "This button is getting shy now 🙈",
    "Okay but the pink button misses you 💗",
    "Last chance? 🥺✨"
  ]
};
/* =============================== */

document.getElementById("herName").textContent = CONFIG.herName;

document.getElementById("waLink").href =
  "https://wa.me/" + CONFIG.yourWhatsAppNumber + "?text=" + encodeURIComponent(CONFIG.whatsappText);

const landing = document.getElementById("landing");
const main = document.getElementById("main");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const landingText = document.getElementById("landingText");
const musicBtn = document.getElementById("musicBtn");

let noCount = 0;

yesBtn.addEventListener("click", openMagic);
noBtn.addEventListener("click", dodgeNo);

document.getElementById("finalYes").addEventListener("click", () => {
  document.getElementById("secret").classList.add("show");
  burstConfetti();
  loveStorm();
});

document.getElementById("finalNo").addEventListener("click", (e) => {
  e.currentTarget.textContent = "I will wait softly 💗";
  sparkleAt(e.clientX || innerWidth / 2, e.clientY || innerHeight / 2);
});

function openMagic(){
  burstConfetti();

  landing.style.transition = ".9s ease";
  landing.style.opacity = "0";
  landing.style.transform = "scale(1.08)";

  setTimeout(() => {
    landing.style.display = "none";
    document.body.classList.remove("lock");
    main.classList.add("show");
    musicBtn.classList.add("show");
    startTyping();
    revealOnScroll();
    loveStorm();
  }, 850);
}

function dodgeNo(e){
  noCount++;

  landingText.textContent = CONFIG.noTexts[(noCount - 1) % CONFIG.noTexts.length];

  const scale = Math.min(1 + noCount * 0.12, 1.9);
  yesBtn.style.transform = `scale(${scale})`;

  const maxX = Math.min(120, window.innerWidth * 0.25);
  const maxY = Math.min(90, window.innerHeight * 0.16);
  const x = (Math.random() * 2 - 1) * maxX;
  const y = (Math.random() * 2 - 1) * maxY;

  noBtn.style.transform =
    `translate(${x}px, ${y}px) scale(${Math.max(0.75, 1 - noCount * 0.04)})`;

  sparkleAt(e.clientX || innerWidth / 2, e.clientY || innerHeight / 2);
}

function startTyping(){
  const el = document.getElementById("typewriter");
  el.innerHTML = "";

  const lines = [
    ["I", "made", "this", "only", "for", "you"],
    ["because", "you", "feel", "so", "special", "to", "me"],
    ["and", "I", "hope", "this", "makes", "you", "smile"]
  ];

  let delay = 250;

  lines.forEach((line, lineIndex) => {
    const row = document.createElement("div");
    row.className = "cuteLine";
    el.appendChild(row);

    line.forEach((word) => {
      const span = document.createElement("span");
      span.className = "cuteWord";

      if(["you", "special", "smile"].includes(word)){
        span.classList.add("special");
      }

      span.textContent = word;
      row.appendChild(span);

      setTimeout(() => {
        span.classList.add("show");

        if(Math.random() > 0.45){
          sparkleAt(
            innerWidth / 2 + (Math.random() * 160 - 80),
            innerHeight / 2 + (Math.random() * 80 - 40)
          );
        }
      }, delay);

      delay += 145 + Math.random() * 85;
    });

    if(lineIndex === 0){
      const emoji = document.createElement("span");
      emoji.className = "cuteEmoji";
      emoji.textContent = "💗";
      row.appendChild(emoji);

      setTimeout(() => emoji.classList.add("show"), delay + 120);
      delay += 420;
    }

    if(lineIndex === 1){
      const emoji = document.createElement("span");
      emoji.className = "cuteEmoji";
      emoji.textContent = "✨";
      row.appendChild(emoji);

      setTimeout(() => emoji.classList.add("show"), delay + 120);
      delay += 420;
    }
  });
}

function revealOnScroll(){
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add("visible");
      }
    });
  }, { threshold: 0.18 });

  document.querySelectorAll(".reveal").forEach(el => obs.observe(el));
}

function sparkleAt(x, y){
  for(let i = 0; i < 14; i++){
    const s = document.createElement("span");

    s.textContent = ["✨", "💗", "🌸", "💫"][Math.floor(Math.random() * 4)];
    s.style.position = "fixed";
    s.style.left = x + "px";
    s.style.top = y + "px";
    s.style.pointerEvents = "none";
    s.style.zIndex = 10000;
    s.style.fontSize = (14 + Math.random() * 16) + "px";
    s.style.transition = ".8s ease-out";

    document.body.appendChild(s);

    requestAnimationFrame(() => {
      s.style.transform =
        `translate(${(Math.random() * 2 - 1) * 95}px, ${-40 - Math.random() * 100}px) rotate(${Math.random() * 180}deg)`;
      s.style.opacity = "0";
    });

    setTimeout(() => s.remove(), 850);
  }
}

function loveStorm(){
  let total = 0;

  const t = setInterval(() => {
    createFloating();
    total++;

    if(total > 38){
      clearInterval(t);
    }
  }, 120);
}

function createFloating(){
  const h = document.createElement("div");

  h.className = "floating";
  h.textContent = ["💗", "💕", "💖", "🌸", "✨", "💘"][Math.floor(Math.random() * 6)];
  h.style.left = Math.random() * 100 + "vw";
  h.style.bottom = "-30px";
  h.style.fontSize = (18 + Math.random() * 24) + "px";
  h.style.animationDuration = (5 + Math.random() * 5) + "s";

  document.body.appendChild(h);

  setTimeout(() => h.remove(), 10500);
}

setInterval(() => {
  if(main.classList.contains("show")){
    createFloating();
  }
}, 900);

/* Soft generated music: works after tap on iPhone */
let audioCtx;
let playing = false;
let gain;

musicBtn.addEventListener("click", async () => {
  if(!audioCtx){
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();

    gain = audioCtx.createGain();
    gain.gain.value = 0.035;
    gain.connect(audioCtx.destination);
  }

  if(audioCtx.state === "suspended"){
    await audioCtx.resume();
  }

  if(!playing){
    playing = true;
    musicBtn.textContent = "♫";
    playLoop();
  }else{
    playing = false;
    musicBtn.textContent = "♪";
  }
});

function tone(freq, start, dur){
  if(!playing || !audioCtx){
    return;
  }

  const o = audioCtx.createOscillator();
  const g = audioCtx.createGain();

  o.type = "sine";
  o.frequency.value = freq;

  g.gain.setValueAtTime(0, start);
  g.gain.linearRampToValueAtTime(0.06, start + 0.04);
  g.gain.exponentialRampToValueAtTime(0.001, start + dur);

  o.connect(g);
  g.connect(gain);

  o.start(start);
  o.stop(start + dur + 0.05);
}

function playLoop(){
  if(!playing || !audioCtx){
    return;
  }

  const now = audioCtx.currentTime;
  const melody = [392, 440, 523, 440, 392, 330, 392, 523];

  melody.forEach((f, i) => tone(f, now + i * 0.38, 0.34));

  setTimeout(playLoop, 3300);
}

/* Canvas star field */
const sky = document.getElementById("sky");
const sctx = sky.getContext("2d");

let stars = [];

function resizeSky(){
  sky.width = innerWidth * devicePixelRatio;
  sky.height = innerHeight * devicePixelRatio;

  sctx.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);

  stars = Array.from({ length: 90 }, () => ({
    x: Math.random() * innerWidth,
    y: Math.random() * innerHeight,
    r: Math.random() * 1.7 + 0.25,
    a: Math.random(),
    v: Math.random() * 0.018 + 0.004
  }));
}

addEventListener("resize", resizeSky);
resizeSky();

function drawSky(){
  sctx.clearRect(0, 0, innerWidth, innerHeight);

  stars.forEach(st => {
    st.a += st.v;

    const op = (Math.sin(st.a) + 1) / 2;

    sctx.beginPath();
    sctx.arc(st.x, st.y, st.r, 0, Math.PI * 2);
    sctx.fillStyle = `rgba(255,230,245,${op * 0.75})`;
    sctx.fill();
  });

  requestAnimationFrame(drawSky);
}

drawSky();

/* Confetti */
const conf = document.getElementById("confetti");
const cctx = conf.getContext("2d");

let confs = [];

function resizeConf(){
  conf.width = innerWidth * devicePixelRatio;
  conf.height = innerHeight * devicePixelRatio;

  cctx.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);
}

addEventListener("resize", resizeConf);
resizeConf();

function burstConfetti(){
  for(let i = 0; i < 130; i++){
    confs.push({
      x: innerWidth / 2,
      y: innerHeight * 0.45,
      vx: (Math.random() * 2 - 1) * 7,
      vy: (Math.random() * -8) - 2,
      g: 0.18 + Math.random() * 0.12,
      r: 3 + Math.random() * 6,
      rot: Math.random() * Math.PI,
      life: 120,
      emoji: Math.random() < 0.35
    });
  }
}

function drawConfetti(){
  cctx.clearRect(0, 0, innerWidth, innerHeight);

  confs = confs.filter(p => p.life-- > 0);

  confs.forEach(p => {
    p.x += p.vx;
    p.y += p.vy;
    p.vy += p.g;
    p.rot += 0.1;

    cctx.save();
    cctx.translate(p.x, p.y);
    cctx.rotate(p.rot);

    if(p.emoji){
      cctx.font = `${p.r * 3}px serif`;
      cctx.fillText(["💗", "✨", "🌸"][Math.floor(Math.random() * 3)], 0, 0);
    }else{
      cctx.fillStyle = ["#ff5f9e", "#ffd777", "#ffd6e7", "#ff2f7d"][Math.floor(Math.random() * 4)];
      cctx.fillRect(-p.r / 2, -p.r / 2, p.r, p.r * 1.6);
    }

    cctx.restore();
  });

  requestAnimationFrame(drawConfetti);
}

drawConfetti();