
  const carousel = document.getElementById('carousel');
  let startX;
  let currentAngle = 0;
  let dragging = false;

  carousel.addEventListener('mousedown', (e) => {
    dragging = true;
    startX = e.clientX;
    carousel.style.cursor = 'grabbing';
  });

  window.addEventListener('mouseup', () => {
    dragging = false;
    carousel.style.cursor = 'grab';
  });

  window.addEventListener('mousemove', (e) => {
    if (!dragging) return;
    const deltaX = e.clientX - startX;
    startX = e.clientX;
    currentAngle += deltaX * 0.3; // Sensibilidade
    carousel.style.transform = `rotateY(${currentAngle}deg)`;
  });

  // Touch (mobile)
  carousel.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
  });

  carousel.addEventListener('touchmove', (e) => {
    const deltaX = e.touches[0].clientX - startX;
    startX = e.touches[0].clientX;
    currentAngle += deltaX * 0.3;
    carousel.style.transform = `rotateY(${currentAngle}deg)`;
  });

