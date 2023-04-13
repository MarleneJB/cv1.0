const calcularBtn = document.getElementById("calcular");
const baseInput = document.getElementById("base");
const alturaInput = document.getElementById("altura");
const resultadoInput = document.getElementById("resultado");

calcularBtn.addEventListener("click", () => {
  const base = parseFloat(baseInput.value);
  const altura = parseFloat(alturaInput.value);
  const area = (base * altura) / 2;
  resultadoInput.value = area.toFixed(2);
});