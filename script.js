// Simpele tilt/hover voor de telefoon (optioneel)
const phoneWrapper = document.querySelector('.phone-wrapper');

if (phoneWrapper) {
  phoneWrapper.addEventListener('mousemove', (e) => {
    const rect = phoneWrapper.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    const rotateX = (y / rect.height) * -20; // kantelen
    const rotateY = (x / rect.width) * 20;

    phoneWrapper.style.transform =
      `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });

  phoneWrapper.addEventListener('mouseleave', () => {
    phoneWrapper.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg)';
  });
}
