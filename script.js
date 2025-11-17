// Simpele 3D-reactie van de sinaasappel op de cursor
const heroSection = document.querySelector('.hero');
const orange = document.querySelector('.orange-orb');

if (heroSection && orange) {
  heroSection.addEventListener('mousemove', (e) => {
    const rect = heroSection.getBoundingClientRect();
    const x = e.clientX - rect.left; // positie binnen hero
    const y = e.clientY - rect.top;

    const midX = rect.width / 2;
    const midY = rect.height / 2;

    // Hoe ver vanaf het midden (–1 tot 1)
    const relX = (x - midX) / midX;
    const relY = (y - midY) / midY;

    const rotateY = relX * 15;  // draai horizontaal
    const rotateX = -relY * 15; // draai verticaal

    const translateX = relX * 20;
    const translateY = relY * 20;

    orange.style.transform = `
      translate3d(${translateX}px, ${translateY}px, 0)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
    `;
  });

  heroSection.addEventListener('mouseleave', () => {
    orange.style.transform = 'translate3d(0, 0, 0) rotateX(0deg) rotateY(0deg)';
  });
}
