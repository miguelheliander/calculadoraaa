const display = document.getElementById('display');
const botões = document.querySelectorAll('.botões button');

let valorAtual = '';
let valorAnterior = '';
let operação = '';

botões.forEach(botão => {
 botão.addEventListener('click', () => {
 const valorBotão = botão.textContent;

 if (valorBotão === 'C') {
 valorAtual = '';
 valorAnterior = '';
 operação = '';
 display.value = '';
 } else if (valorBotão === '=') {
 calcular();
 } else if (['+', '-', '*', '/'].includes(valorBotão)) {
 operação = valorBotão;
 valorAnterior = valorAtual;
 valorAtual = '';
 } else {
 valorAtual += valorBotão;
 display.value = valorAtual;
 }
 });
});

function calcular() {
 let resultado;

 switch (operação) {
 case '+':
 resultado = parseFloat(valorAnterior) + parseFloat(valorAtual);
 break;
 case '-':
 resultado = parseFloat(valorAnterior) - parseFloat(valorAtual);
 break;
 case '*':
 resultado = parseFloat(valorAnterior) * parseFloat(valorAtual);
 break;
 case '/':
 resultado = parseFloat(valorAnterior) / parseFloat(valorAtual);
 break;
 default:
 resultado = valorAtual;
 }

 display.value = resultado.toString();
 valorAtual = resultado.toString();
 valorAnterior = '';
 operação = '';
}

