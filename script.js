const bars = document.querySelectorAll('.bar');
let animationPaused = true;

function startAnimation() {
  if (animationPaused) {
    bars.forEach(bar => {
      bar.style.animation = 'none';
      void bar.offsetWidth; // Trigger reflow
      bar.style.animation = null;
    });
    animationPaused = false;
  }
}

function stopAnimation() {
  bars.forEach(bar => {
    bar.style.animationPlayState = 'paused';
  });
  animationPaused = true;
}

function resetAnimation() {
  bars.forEach(bar => {
    bar.style.animation = 'none';
    bar.style.width = '100%'; // Set full width
    void bar.offsetWidth; // Trigger reflow
    bar.style.animation = null;
  });
  stopAnimation();
}

document.getElementById('startBtn').addEventListener('click', startAnimation);
document.getElementById('stopBtn').addEventListener('click', stopAnimation);
document.getElementById('resetBtn').addEventListener('click', resetAnimation);
