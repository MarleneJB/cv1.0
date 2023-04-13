const saludoBtn = document.querySelector('#saludo-btn');
const saludoMsg = document.querySelector('#saludo-msg');

saludoBtn.addEventListener('click', () => {
  saludoMsg.style.display = 'block';
  saludoMsg.textContent = '¡Hola Mundo!';
});
