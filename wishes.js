const showBtn = document.getElementById('showWishesBtn');
const wishLines = document.getElementById('wishLines');
const specialLetter = document.getElementById('specialLetter');
const nextBtn = document.getElementById('nextBtn');

showBtn.addEventListener('click', () => {
  showBtn.style.display = 'none';
  wishLines.style.display = 'block';

  const lines = document.querySelectorAll('.wish-line');
  lines.forEach((line, index) => {
    setTimeout(() => {
      line.style.opacity = 1;
    }, index * 1000);
  });

  // Show special letter AND Next button together after last wish line
  setTimeout(() => {
    specialLetter.style.display = 'block';
    nextBtn.style.display = 'inline-block'; // <-- make sure this line is here
  }, lines.length * 1000 + 500);
});
