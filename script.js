const giftBox = document.getElementById("giftBox");
const surprise = document.getElementById("surprise");
const homeScreen = document.getElementById("homeScreen");
const canvas = document.getElementById("confetti");
const ctx = canvas.getContext("2d");

// Canvas size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Confetti setup
let pieces = [];
const numberOfPieces = 100;

for (let i = 0; i < numberOfPieces; i++) {
  pieces.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    size: Math.random() * 10 + 5,
    color: `hsl(${Math.random() * 360}, 100%, 50%)`,
    speed: Math.random() + 1
  });
}

function updateConfetti() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < numberOfPieces; i++) {
    let p = pieces[i];
    p.y += p.speed;
    if (p.y > canvas.height) {
      p.y = 0 - p.size;
      p.x = Math.random() * canvas.width;
    }
    ctx.fillStyle = p.color;
    ctx.fillRect(p.x, p.y, p.size, p.size);
  }
  requestAnimationFrame(updateConfetti);
}

// Start confetti on home screen
updateConfetti();

// Gift box click event
giftBox.addEventListener("click", () => {
  homeScreen.style.display = "none";
  surprise.style.display = "flex";
});

