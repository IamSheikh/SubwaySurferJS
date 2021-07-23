const character = document.getElementById('character');
const block = document.getElementById('block');
let score = 0;

function moveLeft() {
  var left = parseInt(
    window.getComputedStyle(character).getPropertyValue('left')
  );
  left -= 100;
  if (left >= 0) {
    character.style.left = left + 'px';
  }
}

function moveRight() {
  var left = parseInt(
    window.getComputedStyle(character).getPropertyValue('left')
  );
  left += 100;
  if (left < 300) {
    character.style.left = left + 'px';
  }
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowLeft') {
    moveLeft();
  }
  if (e.key === 'ArrowRight') {
    moveRight();
  }
});

block.addEventListener('animationiteration', () => {
  let random = Math.floor(Math.random() * 3);
  left = random * 100;
  block.style.left = left + 'px';
  score++;
});

setInterval(function () {
  let characterLeft = parseInt(
    window.getComputedStyle(character).getPropertyValue('left')
  );
  let blockLeft = parseInt(
    window.getComputedStyle(block).getPropertyValue('left')
  );
  let blockTop = parseInt(
    window.getComputedStyle(block).getPropertyValue('top')
  );
  if (characterLeft == blockLeft && blockTop < 500 && blockTop > 300) {
    alert(`Game Over. Your Score: ${score}`);
    block.style.animation = 'none';
    document.location.reload();
  }
}, 1);

document.getElementById('left').addEventListener('touchstart', moveLeft);
document.getElementById('right').addEventListener('touchstart', moveRight);
